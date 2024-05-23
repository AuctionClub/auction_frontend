"use client";

import React from "react";
import { Text, Button, Popover } from "@radix-ui/themes";
import { useRouter, usePathname } from "next/navigation";

const PopoverWarp = ({ children, item, ...rest }: any) => {
  const router = useRouter();
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
            color="indigo"
            variant="soft"
            style={{ width: "100%" }}
            onClick={() => {
              router.push(`/detail/${item.tokenId}`);
            }}
          >
            View
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PopoverWarp;
