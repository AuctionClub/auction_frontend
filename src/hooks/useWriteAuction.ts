import { useWriteContract } from "wagmi";
import { BritishAuctionAbi, DutchAuctionAbi } from "@/constants/abi";

const useWriteAuction = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const createBritish = (args:Array<any>) => {
    writeContract({
      abi: BritishAuctionAbi,
      address: "0x0a6E9E804f4777bdC2B5b1861f06E1920a1B110b",
      functionName: "createAuction",
      args,
    });
  };
  const createDutch = (args:Array<any>) => {
    writeContract({
      abi: DutchAuctionAbi,
      address: "0x6Fb69fF5D34456D4eF5e064f792f87037e4eBF6a",
      functionName: "startAuction",
      args,
    });
  };

  return {
    createBritish, createDutch, error, isError, isPending, isSuccess, data, failureReason,
  };
};

export default useWriteAuction;
