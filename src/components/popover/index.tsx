import React from "react";

import { Text, Button, Popover } from "@radix-ui/themes";

const PopoverWarp = ({ children, ...rest }: any) => {
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
            竞拍
          </Button>
        </div>
        <div>
          <Button color="indigo" variant="soft" style={{ width: "100%" }}>
            查看
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default PopoverWarp;
