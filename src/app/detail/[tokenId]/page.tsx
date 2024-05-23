"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@radix-ui/themes";
import useStore from "@/store";

type Props = {

}

const DetailPage = (props: Props) => {
  const CurrentNFT = useStore((state:any) => state.CurrentNFT);
  console.log(CurrentNFT, "CurrentNFTCurrentNFTCurrentNFTCurrentNFT");

  return (
  // TODO　跨页面数据传递
    <div className="flex h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
      <div className="w-4/5 flex justify-center items-center">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
          <Image
            src="https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000"
            width={400}
            height={400}
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="w-1/5 hover:shadow-2xl flex flex-col  items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-l-lg p-5 pt-[10%]">
        <div className="text-gray-900">
          <h1 className="text-3xl font-bold mb-4">NFT Info</h1>
          <p className="text-lg font-bold mb-2">
            Final Price:
            {" "}
            <span className="text-indigo-600">
              {CurrentNFT.currentBid}
              {" "}
              {/* ETH */}
            </span>
          </p>
          <p className="text-lg font-bold mb-2">
            Starting Price:
            {" "}
            <span className="text-indigo-600">
              {CurrentNFT.price}
              {" "}
              {/* ETH */}
            </span>
          </p>
          <p className="text-lg font-bold mb-2">
            Deadline:
            {CurrentNFT.deadline}
          </p>
          <p className="text-lg font-bold mb-2">
            Auction Type:
            {" "}
            {CurrentNFT.tags.map((tag: string) => (
              <Badge size="3" color="indigo" key={tag}>
                {tag}
              </Badge>
            ))}

          </p>

        </div>
        <div />
      </div>
    </div>
  );
};

export default DetailPage;
