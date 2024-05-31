import { useReadContract } from "wagmi";
import { BritishAuctionAbi } from "@/constants/abi";

const useReadAuction = () => {
  const useReadIsOnAuction = (args:Array<any>) => useReadContract({
    abi: BritishAuctionAbi,
    address: "0x0a6E9E804f4777bdC2B5b1861f06E1920a1B110b",
    functionName: "isOnAuction",
    args,
  });

  return {
    useReadIsOnAuction,
  };
};

export default useReadAuction;
