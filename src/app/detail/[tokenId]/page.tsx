import React from "react";
import Image from "next/image";
import { Badge } from "@radix-ui/themes";

type Props = {}

const DetailPage = (props: Props) => (
  // TODO　跨页面数据传递
  <div className="flex flex-wrap h-screen">
    <div className="w-4/5 bg-slate-400 h-full flex justify-center items-center">
      <Image
        src="https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000"
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </div>
    <div className="w-1/5  h-full">
      <div className="p-5">
        <h1 className=" text-3xl font-bold">NFT Info</h1>
        <p className=" text-lg font-bold mt-2">
          Final Price：
          {`${1000} ETH`}
        </p>
        <p className=" text-lg font-bold mt-2">
          Starting Price：
          {`${1000} ETH`}
        </p>
        <p className=" text-lg font-bold mt-2">
          Auction Type：
          <Badge size="3" color="indigo">
            Dutch Auction
          </Badge>
        </p>
      </div>
    </div>
  </div>
);

export default DetailPage;
