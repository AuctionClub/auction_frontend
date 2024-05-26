import Image from "next/image";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { useRouter, usePathname } from "next/navigation";
import { NFTItem } from "@/hooks/useNFT";

type AuctionItemProps = {
  item: NFTItem;
};

export default function AuctionItem({ item }: AuctionItemProps) {
  const path = usePathname();

  return (
    <div className="w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in">
      <Image
        src={item.img}
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <div className="px-2 py-4  relative pt-4">
        <p className="font-bold text-lg mb-1">{item.name}</p>
        <div className="text-xs">
          <div className="flex mt-0.5">
            <p>类型：</p>
            <p>{item.tags.join(" · ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
