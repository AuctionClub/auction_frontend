import React from 'react'

const page = () => {
   return (
    <div className="flex flex-wrap w-full h-[93vh]">
      <div className="w-1/2 border border-gray-300 flex items-center justify-center">
        <div className="text-center">
            MY NFT
        </div>
      </div>
      <div className="w-1/2 border border-gray-300 flex items-center justify-center">
        <div className="text-center">
            Balance
        </div>
        <button>
            Withdraw
        </button>
      </div>
      <div className="w-1/2 border border-gray-300 flex items-center justify-center">
        <div className="text-center">
           Bid Record 
        </div>
      </div>
      <div className="w-1/2 border border-gray-300 flex items-center justify-center">
        <div className="text-center">Initiated Auction Record</div>
      </div>
    </div>
  );
}

export default page