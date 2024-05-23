import React from "react";

import { Text, Button, Popover } from "@radix-ui/themes";

const PopoverWarp = ({ children, ...rest }: any) => (
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
        <Button color="indigo" variant="soft" style={{ width: "100%" }}>
          View
        </Button>
      </div>
    </Popover.Content>
  </Popover.Root>
);

export default PopoverWarp;
