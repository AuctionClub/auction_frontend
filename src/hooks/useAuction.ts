import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/fetchJson";
import { useAccount, useWriteContract, useReadContract } from "wagmi";
import { BritishAuctionAbi } from "@/constants/abi";

const useAuction = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const createBritish = (args:Array<any>) => {
    writeContract({
      abi: BritishAuctionAbi,
      address: "0xd3AAb713c3c24f87136c828a9b14b2D3233b09FB",
      functionName: "createAuction",
      args,
    });
  };

  return {
    createBritish, error, isError, isPending, isSuccess, data, failureReason,
  };
};

export default useAuction;
