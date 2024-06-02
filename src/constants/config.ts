import { BritishAuctionAbi, DutchAuctionAbi, NFTAbi } from "@/constants/abi";

export const britisConfig = {
  abi: BritishAuctionAbi,
  address: "0xA1c7AEaBCB8C7F64d03382cbeEA2cE124d5A26Ff",
} as const;
export const dutchConfig = {
  abi: DutchAuctionAbi,
  address: "0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8",
} as const;
export const NFTConfig = {
  abi: NFTAbi,
  address: "0xcef6dF73404BaecCDaa5986615233B0e7e442e2d",
} as const;
// 新部署的荷兰拍，事件里增加了endTime：0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8
