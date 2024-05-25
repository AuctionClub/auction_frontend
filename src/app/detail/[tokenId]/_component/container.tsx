"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Badge, Box, Text, Tabs, Button,
  Grid,
  ScrollArea,
  Strong,
} from "@radix-ui/themes";
import useStore from "@/store";
import * as Form from "@radix-ui/react-form";
import * as Avatar from "@radix-ui/react-avatar";
import AvatarDiv from "@/components/avatar";
import StorageUtil from "@/lib/storage";

type Props = {

}

const DetailContainerPage = (props: Props) => {
  const CurrentNFT = StorageUtil.getLocalStorage("currentNFT");
  const [CurrentTab, setCurrentTab] = useState("Info");
  return (
  // TODO:跨页面数据传递
    <div className="flex w-full h-[93vh] ">
      <div className="w-[70%] flex justify-center items-center">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
          <Image
            src="https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000"
            width={400}
            height={400}
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="w-[30%] h-[96.5%] my-[1%]  hover:shadow-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-5">
        <Tabs.Root
          defaultValue="Info"
          value={CurrentTab}
          className="w-full"
          onValueChange={(value: string) => {
            setCurrentTab(value);
            console.log(value, "@@@@###");
          }}
        >
          <Tabs.List className="flex space-x-2">
            <Tabs.Trigger
              value="Info"
              className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
            >
              Info
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Bid"
              className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
            >
              Bid
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Auction"
              className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
            >
              Auction
            </Tabs.Trigger>
          </Tabs.List>

          <div className="pt-3">
            <Tabs.Content value="Info">
              <div className="text-gray-900 py-10">
                <h1 className="text-3xl font-bold mb-4">NFT Info</h1>
                <p className="text-lg font-bold mb-2">
                  Final Price:
                  {" "}
                  <span className="text-indigo-600">{CurrentNFT.currentBid}</span>
                </p>
                <p className="text-lg font-bold mb-2">
                  Starting Price:
                  {" "}
                  <span className="text-indigo-600">{CurrentNFT.price}</span>
                </p>
                <p className="text-lg font-bold mb-2">
                  Deadline:
                  {" "}
                  <Badge size="3" color="orange">
                    {CurrentNFT.deadline}
                  </Badge>
                </p>
                <p className="text-lg font-bold mb-2">
                  Auction Type:
                  {" "}
                  {CurrentNFT.tags.map((tag) => (
                    <Badge
                      size="3"
                      color="indigo"
                      key={tag}
                      className="text-lg font-bold mr-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </p>
              </div>
            </Tabs.Content>

            <Tabs.Content value="Bid">
              <Form.Root className="">
                <Form.Field className="grid mb-4" name="bidPrice">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-sm font-medium leading-8">Bid Price</Form.Label>
                    <Form.Message className="text-xs text-gray-500" match="valueMissing">
                      Please enter your Bid Price
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="w-full bg-white shadow-sm rounded px-3 py-2 text-sm leading-none outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-4" name="count">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-sm font-medium leading-8">Count</Form.Label>
                    <Form.Message className="text-xs text-gray-500" match="valueMissing">
                      Please enter a count
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="w-full bg-white shadow-sm rounded px-3 py-2 text-sm leading-none outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Text>
                  Your Balance:
                  <Strong>
                    {1000}
                    ETH
                  </Strong>
                </Text>
                <Form.Submit asChild>
                  <Button style={{ width: "100%", marginTop: "1rem" }}>Confirm</Button>
                </Form.Submit>
              </Form.Root>
            </Tabs.Content>

            <Tabs.Content value="Auction">
              <div>
                <Text size="4" className="font-bold text-lg">Auction Detail</Text>
                <div className="flex justify-between items-center w-full mb-4">
                  <div>
                    <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
                  </div>
                  <Text size="2" className="text-gray-700">98份正在拍卖, 起拍价1.2USDT, 来自0Xdddd</Text>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-100 text-center font-bold p-2 rounded shadow-md hover:shadow-lg">
                    <div className="text-indigo-600">1.2 USDT</div>
                    <div>Lowest</div>
                  </div>
                  <div className="bg-gray-100 text-center font-bold p-2 rounded shadow-md hover:shadow-lg">
                    <div className="text-red-600">10%</div>
                    <div>Dividend</div>
                  </div>
                  <div className="bg-gray-100 text-center font-bold p-2 rounded shadow-md hover:shadow-lg">
                    <div className="text-green-600">0.3 USDT</div>
                    <div>Markup</div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <Text size="4" className="font-bold text-lg">Bid List</Text>
                <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="w-full mb-2 flex items-center">
                      <div>
                        <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
                      </div>
                      <div className="ml-2">
                        <Text size="2" as="p">
                          出价
                          {" "}
                          <Strong>1.2USDT</Strong>
                        </Text>
                        <Text size="1" as="p" className="text-gray-500">
                          0xeeeeeee
                          {`${index}`}
                        </Text>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
              <div className="mb-4">
                <Text size="4" className="font-bold text-lg">Best Bid</Text>
                <Text as="p" size="2" className="text-gray-500">Top Price from</Text>
                <Text as="p" size="1" className="text-gray-700">0XEEEEEEEEEEEEEEEEEE</Text>
                <Text as="p" className="text-blue-600 font-bold">1.3 USDT</Text>
              </div>
              <div>
                <Button
                  style={{ width: "100%", marginBottom: "1rem" }}
                  onClick={() => {
                    setCurrentTab("Bid");
                  }}
                >
                  Auction
                </Button>
              </div>
              <div>
                <Text size="2" className="text-green-500 font-bold text-center" as="p">
                  Deadline:
                  {CurrentNFT.deadline}
                </Text>
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>

    </div>
  );
};

export default DetailContainerPage;
