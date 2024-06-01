import { useWriteContract, useSimulateContract } from "wagmi";
import { britisConfig, dutchConfig } from "@/constants";

const useWriteAuction = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const createBritish = (args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "createAuction",
      args,
    });
  };
  const createDutch = (args:Array<any>) => {
    writeContract({
      ...dutchConfig,
      functionName: "startAuction",
      args,
    });
  };
  const bidBritish = (args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "bid",
      args,
    });
  };
  const useBidDutch = (value:any, args:Array<any>) => {
    const result = useSimulateContract({
      ...dutchConfig,
      functionName: "bid",
      args,
      value,
    });
    console.log(value, args, result.error?.message, "调用了出价");
    return result;
  };
  const cancelBritish = (args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "cancelAuction",
      args,
    });
  };
  const cancelDutch = (args:Array<any>) => {
    writeContract({
      ...dutchConfig,
      functionName: "finalizeAuction",
      args,
    });
  };

  return {
    createBritish, createDutch, bidBritish, useBidDutch, cancelBritish, cancelDutch, error, isError, isPending, isSuccess, data, failureReason,
  };
};

export default useWriteAuction;
