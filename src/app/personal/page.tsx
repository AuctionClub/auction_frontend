import React from 'react'
import MyNFT from './_components/MyNFT';
import MyBalance from './_components/MyBalance';
import InitiatedAuctionRecord from './_components/InitiatedAuctionRecord';
import BidRecord from './_components/BidRecord';

const page = () => {
   return (
    <div className="flex flex-wrap w-full ">
      <div className="w-1/2  flex-col ">
        <div className="text-center  flex-grow">
            <MyNFT></MyNFT>
        </div>
      </div>
      <div className="w-1/2   ">
        <MyBalance></MyBalance>
      </div>
        <div className="w-1/2 ">
        <div className="text-center ">
          <BidRecord />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="text-center flex-grow">
          <InitiatedAuctionRecord />
        </div>
      </div>
    </div>
  );
}

export default page