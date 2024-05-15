import Image from 'next/image'
import { LapTimerIcon } from '@radix-ui/react-icons'

type CollectItemProps = {
  item: any
}

export default function CollectItem({ item }: CollectItemProps) {
  return (
    <div className="w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in">
      <Image
        src={item.img}
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div className="px-2 py-4 relative">
        <p className="font-bold text-lg mb-1">NFT Name</p>
        <div className="text-sm flex justify-between">
          <div className="flex flex-col">
            <p>Minting</p>
            <p className="font-bold">{item.mintDate}</p>
          </div>
          <div className="flex flex-col text-right">
            <p>Price</p>
            <p className="font-bold">{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
