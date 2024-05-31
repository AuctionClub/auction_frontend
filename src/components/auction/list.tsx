"use client";

import { ScrollArea } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import AuctionItem from "@/components/auction/item";
import useTheGraph from "@/hooks/useTheGraph";
import { useNFTsBycontract, useAggregateNFTs } from "@/hooks/useNFT";
import { useEffect, useState } from "react";
import PopoverWarp from "../popover";

export default function AuctionList() {
  const { data: auctionData, loading: auctionLoading, error: auctionError } = useTheGraph({
    url: "https://api.studio.thegraph.com/query/76625/auctionclub0/version/latest",
    query: `
    {
      auctionCancelleds {
        id
        auctionId
        blockNumber
        blockTimestamp
      }
      highestBidIncreaseds{
        id
        bidder
        amount
        transactionHash
      }
      auctionCreateds{
        id
        auctionId
        seller
        startingPrice
        _startTime
        transactionHash
      }
    }
    `,
  });

  const { nfts: openSeaNFTs, loading: openSeaLoading, error: openSeaError } = useNFTsBycontract("0xcef6df73404baeccdaa5986615233b0e7e442e2d");

  const [aggregatedNFTs, setAggregatedNFTs] = useState([]);
  const [aggregateLoading, setAggregateLoading] = useState(true);
  const [aggregateError, setAggregateError] = useState(null);

  useEffect(() => {
    console.log(aggregateError, "dddd");

    if (!auctionLoading && !openSeaLoading && auctionData && openSeaNFTs) {
      try {
        const aggregatedData:any = openSeaNFTs.map((nft) => {
          const auction = (auctionData as any)?.data.auctionCreateds.find((a) => a.auctionId === nft.tokenId);
          return {
            tokenId: parseInt(nft.tokenId.toString(), 10),
            contractAddress: nft.contractAddress,
            img: nft.img,
            price: auction ? auction.startingPrice : nft.price,
            tags: nft.tags,
            currentBid: "N/A",
            currentBidder: "N/A",
            deadline: auction ? new Date(auction._startTime * 1000).toISOString() : nft.deadline,
            name: nft.name,
            description: nft.description,
            isOwner: nft.isOwner,
          };
        });
        setAggregatedNFTs(aggregatedData);
      } catch (err:any) {
        setAggregateError(err.message);
      } finally {
        setAggregateLoading(false);
      }
    }
  }, [auctionLoading, openSeaLoading, auctionData, openSeaNFTs]);

  if (auctionLoading || openSeaLoading || aggregateLoading) return <p>Loading...</p>;
  if (auctionError || openSeaError || aggregateError) {
    return (
      <p>
        Error:
        {auctionError || openSeaError || aggregateError}
      </p>
    );
  }

  console.log(aggregatedNFTs, openSeaNFTs, auctionData, aggregateError, "``````````````````````````");

  const list = aggregatedNFTs.length ? aggregatedNFTs : [
    {
      tokenId: 1,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 2,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x8888888111122222233444444",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 3,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["英式拍卖", "pleasure", "狂热"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 7,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "10ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 4,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "0.5ETH",
      tags: ["荷兰拍卖", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 5,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "6ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
    {
      tokenId: 6,
      contractAddress: "0xxxx",
      img: "https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000",
      price: "1.23ETH",
      tags: ["荷兰拍卖", "pleasure", "狂热", "慈善"],
      currentBid: "10ETH",
      currentBidder: "0x111112222",
      deadline: "2024-01-01 00:00:00",
    },
  ];
  return (
    <div className="my-20 flex place-content-center relative">
      <div className="md:max-w-screen-lg flex-1 2xl:max-w-7xl px-6 md:px-10">
        <div className="flex justify-between font-bold text-lg">
          <div>Market</div>

          <div className="flex items-center cursor-pointer">
            more
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>

        <ScrollArea
          size="3"
          radius="full"
          type="always"
          scrollbars="horizontal"
        >
          <div className="flex justify-between mb-5 mt-5">
            {list.map((e, i) => (
              <PopoverWarp className="ml-2 mr-2" key={i} item={e}>
                <AuctionItem item={e} />
              </PopoverWarp>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
