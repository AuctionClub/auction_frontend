import { useReadContract } from "wagmi";
import { BritishAuctionAbi } from "@/constants/abi";

const useReadAuction = () => {
  const useReadIsOnAuction = (args:Array<any>) => useReadContract({
    abi: BritishAuctionAbi,
    address: "0xB737c03093847DDd3E38BE07b12db65ED9fA5b63",
    functionName: "isOnAuction",
    args,
  });

  return {
    useReadIsOnAuction,
  };
};

export default useReadAuction;
