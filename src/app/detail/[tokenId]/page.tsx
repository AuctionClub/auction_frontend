"use client";

import React from "react";
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

type Props = {

}

const DetailPage = (props: Props) => {
  const CurrentNFT = useStore((state:any) => state.CurrentNFT);
  return (
  // TODO:跨页面数据传递
    <div className="flex  h-[93vh] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
      <div className="w-4/5 flex justify-center items-center">
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
      <div className="w-1/5 h-[95%] my-[1%] mr-[1%] hover:shadow-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-5 ">
        <Tabs.Root defaultValue="Info">
          <Tabs.List>
            <Tabs.Trigger value="Info">Info</Tabs.Trigger>
            <Tabs.Trigger value="Bid">Bid</Tabs.Trigger>
            <Tabs.Trigger value="Auction">Auction</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="Info">
              <div className="text-gray-900 py-10">
                <h1 className="text-3xl font-bold mb-4">NFT Info</h1>
                <p className="text-lg font-bold mb-2">
                  Final Price:
                  {" "}
                  <span className="text-indigo-600">
                    {CurrentNFT.currentBid}
                    {" "}
                    {/* ETH */}
                  </span>
                </p>
                <p className="text-lg font-bold mb-2">
                  Starting Price:
                  {" "}
                  <span className="text-indigo-600">
                    {CurrentNFT.price}
                    {" "}
                    {/* ETH */}
                  </span>
                </p>
                <p className="text-lg font-bold mb-2">
                  Deadline:
                  <Badge size="3" color="orange">{CurrentNFT.deadline}</Badge>
                </p>
                <p className="text-lg font-bold mb-2">
                  Auction Type:
                  {" "}
                  {CurrentNFT.tags.map((tag: string) => (
                    <Badge size="3" color="indigo" key={tag} className="text-lg font-bold mr-1">
                      {tag}
                    </Badge>
                  ))}

                </p>

              </div>
            </Tabs.Content>

            <Tabs.Content value="Bid">
              <Form.Root className="">
                <Form.Field className="grid mb-[10px]" name="email">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] ">Bid Price</Form.Label>
                    <Form.Message className="text-[13px]  opacity-[0.8]" match="valueMissing">
                      Please enter your Bid Price
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="question">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] ">
                      Count
                    </Form.Label>
                    <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
                      Please enter a count
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                  <Button style={{ width: "100%" }}>
                    Confirm
                  </Button>
                </Form.Submit>
              </Form.Root>
            </Tabs.Content>

            <Tabs.Content value="Auction">
              <div>
                <Text size="5">Auction Detail</Text>
                <div className="flex justify-between items-center w-full mb-2">
                  <div>
                    <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
                    {" "}
                  </div>
                  <Text size="2">98份正在拍卖,起拍价1.2USDT,来自0Xdddd</Text>
                </div>
                <div className="mb-2">
                  <Grid columns="3" gap="1" rows="repeat(1, 64px)" width="auto" justify="center" align="center">
                    <div className="bg-slate-100 text-center font-bold">
                      <div className="text-indigo-300 ">1.2 USTD</div>
                      <div>Lowest</div>
                    </div>
                    <div className="bg-slate-100 text-center font-bold">
                      <div className="text-red-600 ">10%</div>
                      <div>Dividend</div>
                    </div>
                    <div className="bg-slate-100 text-center font-bold">
                      <div className="text-green-400 ">0.3 USDT</div>
                      <div>Markup</div>
                    </div>
                  </Grid>
                </div>
              </div>
              <div className="mb-2">
                <Text size="5">
                  Bid List
                </Text>
                <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
                  {/* 循环10条 */}
                  {
                    Array.from({ length: 10 }).map((_, index) => (
                      <div key={index} className=" w-full mb-2 flex items-center">
                        <div>
                          <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
                          {" "}
                        </div>
                        <div>
                          <Text size="2" as="p">
                            出价
                            <Strong>1.2USDT</Strong>
                          </Text>
                          <Text size="1" as="p">
                            0xeeeeeee
                            {`${index}`}
                          </Text>
                        </div>
                      </div>
                    ))
                  }

                </ScrollArea>
              </div>
              <div>
                <Text size="5">
                  Best Bid
                </Text>
                <Text as="p" size="2" style={{ color: "grey" }}>Top Price from</Text>
                <Text as="p" size="1">0XEEEEEEEEEEEEEEEEEE</Text>
                <Text as="p" style={{ color: "blueviolet" }}> 1.3 USDT</Text>
              </div>
              <div>
                <Button style={{ width: "100%" }}>Auction</Button>
              </div>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <div />
      </div>
    </div>
  );
};

export default DetailPage;
