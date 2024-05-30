import { useWriteContract } from "wagmi";
import { BritishAuctionAbi, DutchAuctionAbi } from "@/constants/abi";

const useWriteAuction = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const createBritish = (args:Array<any>) => {
    writeContract({
      abi: BritishAuctionAbi,
      address: "0xB737c03093847DDd3E38BE07b12db65ED9fA5b63",
      functionName: "createAuction",
      args,
    });
  };
  const createDutch = (args:Array<any>) => {
    writeContract({
      abi: DutchAuctionAbi,
      address: "0xFEc409789F25B71298f62aAC3F1857BcF40ECF1f",
      functionName: "startAuction",
      args,
    });
  };

  return {
    createBritish, createDutch, error, isError, isPending, isSuccess, data, failureReason,
  };
};

export default useWriteAuction;
