import { useReadContract, useReadContracts } from "wagmi";
import { formatEther, formatUnits } from "viem";
import {
  useEffect, useState, useCallback, useMemo,
} from "react";
import { NFTItem } from "@/hooks/useNFT";
import { britisConfig, dutchConfig } from "@/constants";

const useReadAuction = (CurrentNFT:NFTItem) => {
  const isOnAuction = useReadContracts({
    contracts: [
      {
        ...britisConfig,
        functionName: "isOnAuction",
        args: [CurrentNFT.contractAddress, CurrentNFT.tokenId],
      },
      {
        ...dutchConfig,
        functionName: "isOnAuction",
        args: [CurrentNFT.contractAddress, CurrentNFT.tokenId],
      },
    ],
  });

  const auctionIdQueryBritis = useReadContract({
    ...britisConfig,
    functionName: "auctionIdQuery",
    args: [CurrentNFT.contractAddress, Number(CurrentNFT.tokenId)],
  });
  const auctionsInfoBritisData = useReadContract({
    ...britisConfig,
    functionName: "auctions",
    args: [auctionIdQueryBritis.data],
  });
  const auctionIdQueryDutch = useReadContract({
    ...dutchConfig,
    functionName: "auctionIdQuery",
    args: [CurrentNFT.contractAddress, Number(CurrentNFT.tokenId)],
  });
  const auctionsInfoDutch = useReadContract({
    ...dutchConfig,
    functionName: "auctions",
    args: [auctionIdQueryDutch.data],
    query: {
      enabled: !!auctionIdQueryDutch.data,
    },
  });
  // useEffect(() => {
  //   if (auctionsInfoBritis.data) {
  //     console.log("ddd1", auctionsInfoBritis.data);
  //     const [seller, nftAddress, nftTokenId, startingPrice, currentHighestBid, currentHighestBidder, ended, totalBidAmount, startTime, endTime, interval] = auctionsInfoBritis.data as any;
  //     setBritisInfo({
  //       seller, nftAddress, nftTokenId, startingPrice, currentHighestBid, currentHighestBidder, ended, totalBidAmount, startTime, endTime, interval,
  //     });
  //   }
  //   console.log("auctionIdQueryData22:", auctionsInfoDutch);
  // }, [auctionsInfoBritis, auctionsInfoDutch]);
  const {
    auctionsInfoBritis,
  } = useMemo(
    () => {
      let _auctionsInfoBritis = {};
      if (auctionsInfoBritisData.data) {
        const [seller, nftAddress, nftTokenId, startingPrice, currentHighestBid, currentHighestBidder, ended, totalBidAmount, startTime, endTime, interval] = auctionsInfoBritisData.data as any;
        _auctionsInfoBritis = {
          seller, nftAddress, nftTokenId, startingPrice: formatEther(startingPrice), currentHighestBid: formatEther(startingPrice), currentHighestBidder, ended, totalBidAmount: formatEther(totalBidAmount), startTime: formatUnits(startTime, 0), endTime: formatUnits(endTime, 0), interval: formatUnits(interval, 0),
        };
      }
      return {
        auctionsInfoBritis: _auctionsInfoBritis,
      };
    },
    [auctionsInfoBritisData],
  );
  const {
    isOnAuctionBritish,
    isOnAuctionDutch,
  } = useMemo(
    () => {
      let _isOnAuctionBritish = false;
      let _isOnAuctionDutch = false;
      if (isOnAuction.isSuccess) {
        _isOnAuctionBritish = (isOnAuction.data as any)[0].result;
        _isOnAuctionDutch = (isOnAuction.data as any)[1].result;
      }
      return {
        isOnAuctionBritish: _isOnAuctionBritish,
        isOnAuctionDutch: _isOnAuctionDutch,
      };
    },
    [isOnAuction],
  );

  return {
    isOnAuctionBritish,
    isOnAuctionDutch,
    auctionsInfoBritis,
  };
};

export default useReadAuction;
