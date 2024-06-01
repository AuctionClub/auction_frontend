import { useWriteContract } from "wagmi";
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

  return {
    createBritish, createDutch, error, isError, isPending, isSuccess, data, failureReason,
  };
};

export default useWriteAuction;
