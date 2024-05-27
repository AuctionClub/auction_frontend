import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/fetchJson";
import { useAccount } from "wagmi";

interface Attribute {
  trait_type: string;
  value: string;
}

interface Metadata {
  name: string;
  description: string;
  image: string;
  attributes: Attribute[];
}

export interface NFTItem {
  tokenId: number;
  contractAddress: string;
  img: string;
  price: string;
  tags: string[];
  currentBid: string;
  currentBidder: string;
  deadline: string;
  name: string;
  description: string;
  isOwner: boolean;
}

const fetchMetadata = async (url: string): Promise<Metadata> => fetchJson(url);

const useNFTs = (address: any) => {
  const [nfts, setNfts] = useState<NFTItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const account = useAccount();

  useEffect(() => {
    const isOwner = address === account?.address;
    console.log("isOwner:", isOwner);
    const fetchNFTs = async () => {
      try {
        const data = await fetchJson(`https://testnets-api.opensea.io/api/v2/chain/sepolia/account/${address.toString()}/nfts`);

        const nftPromises = data.nfts.map(async (nft: any) => {
          if (!nft.metadata_url) {
            return {
              tokenId: nft.identifier,
              contractAddress: nft.contract,
              img: "", // Default value for missing image
              price: "N/A", // Default price
              tags: [], // Default tags
              currentBid: "N/A", // Default bid
              currentBidder: "N/A", // Default bidder
              deadline: "N/A", // Default deadline
              name: "Unknown", // Default name
              description: "No description available", // Default description
              isOwner,
            };
          }

          const metadata = await fetchMetadata(nft.metadata_url);
          return {
            tokenId: nft.identifier,
            contractAddress: nft.contract,
            img: metadata.image || "", // Fallback for missing image
            price: "N/A", // Default price
            tags: metadata.attributes ? metadata.attributes.map((attr: Attribute) => `${attr.trait_type || "N/A"}:${attr.value || "N/A"}`) : [],
            currentBid: "N/A", // Default bid
            currentBidder: "N/A", // Default bidder
            deadline: "N/A", // Default deadline
            name: metadata.name || "Unknown", // Fallback for missing name
            description: metadata.description || "No description available", // Fallback for missing description
            isOwner,
          };
        });

        const resolvedNfts = await Promise.all(nftPromises);
        setNfts(resolvedNfts);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [address]);

  return { nfts, loading, error };
};

export default useNFTs;
