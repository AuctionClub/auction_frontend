"use client";

import React, { useEffect } from "react";
import { Text, Button, Popover } from "@radix-ui/themes";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import useStore from "@/store";

const PopoverWarp = ({ children, item, ...rest }: any) => {
  const router = useRouter();
  const setCurrentNFT = useStore((state:any) => state.setCurrentNFT);
  console.log(item, "@@@##");
  useEffect(() => {
    setCurrentNFT(item);
  }, []);

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div {...rest}>{children}</div>
      </Popover.Trigger>

      <Popover.Content size="2">
        <div>
          <Button
            color="indigo"
            variant="soft"
            style={{ width: "100%", marginBottom: ".5rem" }}
          >
            Bid
          </Button>
        </div>
        <div>
          <Button
            variant="soft"
            style={{ width: "100%" }}
          >
            <Link
              href={{ pathname: `/detail/${item.tokenId}`, query: { currentItem: JSON.stringify(item) } }}
              color="indigo"
              style={{ width: "100%" }}
            >
              View
            </Link>
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PopoverWarp;
