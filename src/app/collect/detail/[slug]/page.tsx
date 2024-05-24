"use client";

import bg_default from "/public/bg_default.png";
import Image from "next/image";
import {
  Tabs, Box, Separator, Flex,
  Button,
  Dialog,
  ScrollArea,
} from "@radix-ui/themes";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function Page() {
  const item = { logoUrl: "", token: "f22", price: "1.2ETH" };
  return (
    <>
      <div className="w-full flex flex-col justify-center pb-24 pt-8">
        <div className="flex">
          <Image
            src={item.logoUrl || bg_default}
            className="flex-1"
            alt="Picture of the author"
          />
          <div className="w-[35%]">
            <div className="shadow-2xl h-[85%] shadow-zinc-300 bg-[#fff] p-4 rounded-xl">
              <p className="font-bold text-2xl">{item.token}</p>
              <p className="font-bold text-sm">{item.price}</p>
              <Tabs.Root defaultValue="message">
                <Tabs.List size="1">
                  <Tabs.Trigger value="message">Message</Tabs.Trigger>
                  <Tabs.Trigger value="owner">Owner</Tabs.Trigger>
                  <Tabs.Trigger value="auction">Auction</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                  <Tabs.Content value="message">
                    <Box>11</Box>
                  </Tabs.Content>

                  <Tabs.Content value="owner">
                    <Box>222</Box>
                  </Tabs.Content>

                  <Tabs.Content value="auction">
                    <Box>333</Box>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </div>
            <Flex justify="between" align="center" className="mt-3 shadow-lg bg-[#fff] p-3 shadow-zinc-300 rounded-2xl">
              <Box className="flex-1 overflow-hidden pr-2 self-start">
                <p className="text-xs mb-1 h-6">Highest bid</p>
                <p className="font-bold text-sm truncate">0x1122344422222</p>
                <p className="font-bold text-xs">4 ETH</p>
              </Box>
              <Separator orientation="vertical" size="3" />
              <Box className="flex-1 overflow-hidden pl-2">
                <Flex className="text-xs mb-1 h-6" justify="between" align="center">
                  <span>Auction</span>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button color="blue" size="1" variant="soft">
                        view
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth="380px">
                      <Flex justify="between" align="center" className="mb-2">
                        <span className="font-bold text-lg">Nft name</span>

                        <Dialog.Close><Cross1Icon className="cursor-pointer" /></Dialog.Close>
                      </Flex>
                      <Box className="text-base font-bold mb-1">拍卖详情</Box>
                      <Flex direction="column" className="text-sm">
                        <Box>
                          <span>起拍价 </span>
                          <span className="text-sky-600 font-bold">1.2ETH</span>
                        </Box>
                        <Box>来自 0x2223344555555545</Box>
                      </Flex>
                      <Box className="text-sm font-bold mb-1 mt-5">出价列表</Box>
                      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
                        <Flex direction="column" className="text-sm mb-2 bg-[#f5f5f5] rounded-md px-2 py-1">
                          <Box>
                            <span>出价 </span>
                            <span className="text-sky-600 font-bold">1.2ETH</span>
                          </Box>
                          <Box>0x2223344555555545</Box>
                        </Flex>
                        <Flex direction="column" className="text-sm mb-2 bg-[#f5f5f5] rounded-md px-2 py-1">
                          <Box>
                            <span>出价 </span>
                            <span className="text-sky-600 font-bold">1.2ETH</span>
                          </Box>
                          <Box>0x2223344555555545</Box>
                        </Flex>
                        <Flex direction="column" className="text-sm mb-2 bg-[#f5f5f5] rounded-md px-2 py-1">
                          <Box>
                            <span>出价 </span>
                            <span className="text-sky-600 font-bold">1.2ETH</span>
                          </Box>
                          <Box>0x2223344555555545</Box>
                        </Flex>
                        <Flex direction="column" className="text-sm mb-2 bg-[#f5f5f5] rounded-md px-2 py-1">
                          <Box>
                            <span>出价 </span>
                            <span className="text-sky-600 font-bold">1.2ETH</span>
                          </Box>
                          <Box>0x2223344555555545</Box>
                        </Flex>
                        <Flex direction="column" className="text-sm mb-2 bg-[#f5f5f5] rounded-md px-2 py-1">
                          <Box>
                            <span>出价 </span>
                            <span className="text-sky-600 font-bold">1.2ETH</span>
                          </Box>
                          <Box>0x2223344555555545</Box>
                        </Flex>

                      </ScrollArea>
                      <Box className="text-sm mb-1 mt-10">最高价来自</Box>
                      <Flex direction="column" className="text-sm">
                        <Box>0x2223344555555545</Box>
                        <Box className="text-sky-600 font-bold">
                          1.2ETH
                        </Box>
                      </Flex>
                      <Box className="w-full bg-sky-500 rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer">竞拍</Box>
                      <div className="mt-1 rounded-md font-bold text-xs p-1 text-center text-green-600">Deadline: 2024-06-20</div>
                    </Dialog.Content>
                  </Dialog.Root>

                </Flex>
                <p className="font-bold text-sm truncate">0x112234443232323</p>
                <p className="font-bold text-xs">Minimum 4 ETH</p>
                <div className="mt-1 bg-[#f5f5f5] rounded-md font-bold text-xs p-1 text-center text-green-600">Deadline: 2024-06-20</div>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}
