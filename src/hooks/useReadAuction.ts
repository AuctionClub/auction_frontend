import { useReadContract } from "wagmi";
import { BritishAuctionAbi } from "@/constants/abi";

const useReadAuction = () => {
  const useReadIsOnAuction = (args:Array<any>) => useReadContract({
    abi: BritishAuctionAbi,
    address: "0x40A7F45CEE2698e9b5c9430099d63Ac7af341E63",
    functionName: "isOnAuction",
    args,
  });

  return {
    useReadIsOnAuction,
  };
};

export default useReadAuction;
