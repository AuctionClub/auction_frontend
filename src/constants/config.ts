import { BritishAuctionAbi, DutchAuctionAbi } from "@/constants/abi";

export const britisConfig = {
  abi: BritishAuctionAbi,
  address: "0x02a86950abd2959B2517ffbC3EE711Ce88d34704",
} as const;
export const dutchConfig = {
  abi: DutchAuctionAbi,
  address: "0xEDD95F71e9Ec4a2347d01Ebb6C371c659E427Cd5",
} as const;
