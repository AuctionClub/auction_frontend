"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Text,
  Tabs,
  Button,
  Dialog,
  ScrollArea,
  Strong,
  Flex,
  Spinner,
} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import AvatarDiv from "@/components/avatar";
import StorageUtil from "@/lib/storage";
import { NFTItem } from "@/hooks/useNFT";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  DateInput,
  Input,
  Tabs as NTabs,
  Tab as NTab,
} from "@nextui-org/react";
import { parseAbsoluteToLocal } from "@internationalized/date";
import dayjs from "dayjs";
import useWriteAuction from "@/hooks/useWriteAuction";
import useReadAuction from "@/hooks/useReadAuction";
import clsx from "clsx";
import { BaseError, useWatchContractEvent, useAccount } from "wagmi";
import { parseEther, formatUnits } from "viem";
import { britisConfig, dutchConfig } from "@/constants";

interface InfoProps{
  isOnAuctionBritish: boolean;
  isOnAuctionDutch: boolean;
  auctionsInfoBritis:any;
  auctionsInfoDutch:any;
}
const Info = ({
  isOnAuctionBritish, isOnAuctionDutch, auctionsInfoBritis, auctionsInfoDutch,
}:InfoProps) => {
  if (!isOnAuctionBritish && !isOnAuctionDutch) return null;
  if (isOnAuctionBritish) {
    return (
      <>
        <p className="text-lg font-bold mb-2">
          Final Price:
          {" "}
          <span className="text-indigo-600">
            N/A
          </span>
        </p>
        <p className="text-lg font-bold mb-2">
          Starting Price:
          {" "}
          <span className="text-indigo-600">
            {auctionsInfoBritis.startingPrice}
          </span>
        </p>
        <p className="text-lg font-bold mb-2">
          start time:
          {" "}
          <Badge size="3" color="orange">
            {dayjs(auctionsInfoBritis.startTime * 1000).format("YYYY-MM-DD HH:mm")}
          </Badge>
        </p>
        <p className="text-lg font-bold mb-2">
          Deadline:
          {" "}
          <Badge size="3" color="orange">
            {Number(auctionsInfoBritis.endTime) || "N/A"}
          </Badge>
        </p>
        <p className="text-lg font-bold mb-2">
          Auction Type:
          {" "}
          <Badge
            size="3"
            color="indigo"
            className="font-bold mr-1"
          >
            British
          </Badge>
        </p>
      </>
    );
  }
  return (
    <>
      <p className="text-lg font-bold mb-2">
        final price:
        {" "}
        <span className="text-indigo-600">
          N/A
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        starting price:
        {" "}
        <span className="text-indigo-600">
          {auctionsInfoDutch.startingPrice}
          {" "}
          ETH
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        floor price:
        {" "}
        <span className="text-indigo-600">
          {auctionsInfoDutch.reservePrice}
          {" "}
          ETH
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        price decay interval:
        {" "}
        <span className="text-indigo-600">
          {auctionsInfoDutch.price_decay_interval}
          {" "}
          s
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        price decay amount:
        {" "}
        <span className="text-indigo-600">
          {auctionsInfoDutch.price_decay_amount}
          {" "}
          ETH
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        reserve duration:
        {" "}
        <span className="text-indigo-600">
          {auctionsInfoDutch.reserve_duration}
          {" "}
          s
        </span>
      </p>
      <p className="text-lg font-bold mb-2">
        start time:
        {" "}
        <Badge size="3" color="orange">
          {dayjs(auctionsInfoDutch.startTime * 1000).format("YYYY-MM-DD HH:mm")}
        </Badge>
      </p>
      <p className="text-lg font-bold mb-2">
        Deadline:
        {" "}
        <Badge size="3" color="orange">
          {dayjs(auctionsInfoDutch.endTime * 1000).format("YYYY-MM-DD HH:mm")}
          {/* {Number(auctionsInfoDutch.endTime) || "N/A"} */}
        </Badge>
      </p>
      <p className="text-lg font-bold mb-2">
        Auction Type:
        {" "}
        <Badge
          size="3"
          color="indigo"
          className="font-bold mr-1"
        >
          Dutch
        </Badge>
      </p>
    </>
  );
};
const AuctionPanel = ({
  isOnAuctionBritish, isOnAuctionDutch, auctionsInfoBritis, auctionsInfoDutch,
}:InfoProps) => {
  if (!isOnAuctionBritish && !isOnAuctionDutch) return null;
  if (isOnAuctionBritish) {
    return (
      <>
        <div className="flex justify-between items-center w-full mb-4">
          <div>
            <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
          </div>
          <Box className="flex-1 overflow-hidden">
            <Box className="text-gray-700">
              起拍价:
              {" "}
              {auctionsInfoBritis.startingPrice}
              {" "}
              ETH
            </Box>
            {/* <Box className="text-gray-700 truncate overflow-hidden">
              来自:
              {" "}
              {auctionsInfoBritis.currentHighestBidder}
            </Box> */}
          </Box>
        </div>
        <div className="flex justify-around mb-4">
          <div className="bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg">
            <div className="text-indigo-600">
              {" "}
              {auctionsInfoBritis.currentHighestBid}
              {" "}
              ETH
            </div>
            <div>Lowest</div>
          </div>
          {/* <div className="bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg">
            <div className="text-red-600">10%</div>
            <div>Dividend</div>
          </div> */}
          <div className="bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg">
            <div className="text-green-600">
              {" "}
              {auctionsInfoBritis.totalBidAmount}
              {" "}
              ETH
            </div>
            <div>Markup</div>
          </div>
        </div>
        <div className="mb-4">
          <Text size="4" className=" text-lg">
            Best Bid
          </Text>
          <Text as="p" size="2" className="text-gray-500">
            Top Price from
          </Text>
          <Text as="p" size="1" className="text-gray-700">
            {auctionsInfoBritis.currentHighestBidder}
          </Text>
          <Text as="p" className="text-blue-600 ">
            {auctionsInfoBritis.currentHighestBid}
            {" "}
            ETH
          </Text>
        </div>
        {/* <div className="mb-4">
          <Text size="4" className=" text-lg">
            Bid List
          </Text>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 180 }}
          >
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
        </div> */}
      </>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <AvatarDiv iconAttr={{ width: 35, height: 35 }} />
        </div>
        <Box className="flex-1 overflow-hidden">
          <Box className="text-gray-700">
            起拍价:
            {" "}
            {auctionsInfoDutch.startingPrice}
            {" "}
            ETH
          </Box>
          {/* <Box className="text-gray-700 truncate overflow-hidden">
            来自:
            {" "}
            {auctionsInfoDutch.currentHighestBidder}
          </Box> */}
        </Box>
      </div>
      <div className="flex justify-around mb-4">
        <div className="bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg">
          <div className="text-indigo-600">
            {" "}
            {auctionsInfoDutch.startingPrice}
            {" "}
            ETH
          </div>
          <div>current</div>
        </div>
        {/* <div className="bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg">
            <div className="text-red-600">10%</div>
            <div>Dividend</div>
          </div> */}
        <div className="bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg">
          <div className="text-green-600">
            {" "}
            {auctionsInfoDutch.price_decay_amount}
            {" "}
            ETH
          </div>
          <div>decay amount</div>
        </div>
        <div className="bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg">
          <div className="text-green-600">
            {" "}
            {auctionsInfoDutch.price_decay_interval}
            {" "}
            ETH
          </div>
          <div>decay interval</div>
        </div>
      </div>
    </>
  );
};

const DetailContainerPage = () => {
  const CurrentNFT: NFTItem = StorageUtil.getLocalStorage("currentNFT");
  const [CurrentTab, setCurrentTab] = useState("Info");
  const [selected, setSelected] = useState("british");
  const [startPrice, setStartPrice] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [floorPrice, setFloorPrice] = useState("");
  const [reserveDuration, setReserveDuration] = useState("");
  const [interval, setInterval] = useState("");
  const [decayInterval, setDecayInterval] = useState("");
  const [decayAmount, setDecayAmount] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = React.useState(parseAbsoluteToLocal(dayjs().format()));
  const account = useAccount();
  const {
    isOnAuction,
    isOnAuctionBritish, isOnAuctionDutch, auctionsInfoBritis, auctionIdBritis, auctionIdDutch,
    auctionsInfoDutch,
    balances,
  } = useReadAuction(CurrentNFT, account.address);
  useWatchContractEvent({
    ...britisConfig,
    eventName: "AuctionCancelled",
    onLogs(logs) {
      console.log("AuctionCancelled!", logs);
      isOnAuction.refetch();
    },
  });
  useWatchContractEvent({
    ...dutchConfig,
    eventName: "AuctionFailed",
    onLogs(logs) {
      console.log("AuctionFailed!", logs);
      isOnAuction.refetch();
    },
  });
  useWatchContractEvent({
    ...britisConfig,
    eventName: "AuctionCreated",
    onLogs(logs) {
      console.log("AuctionCreated!", logs);
      isOnAuction.refetch();
    },
  });
  useWatchContractEvent({
    ...dutchConfig,
    eventName: "AuctionStarted",
    onLogs(logs) {
      console.log("AuctionStarted!", logs);
      isOnAuction.refetch();
    },
  });

  const {
    createBritish, createDutch, bidBritish, bidDutch, cancelBritish, cancelDutch, isError, isPending, isSuccess, data, error, failureReason,
  } = useWriteAuction();

  useEffect(() => {
    console.log("error====>", error);
    if (error?.message) {
      setErrMsg((error as BaseError).shortMessage || error?.message);
    } else if (isSuccess) {
      setOpen(false);
    }
  }, [
    isError, isPending, isSuccess, error, failureReason,
  ]);
  const bidSubmit = () => {
    if (!auctionIdDutch && !auctionIdBritis) return;
    setErrMsg("");
    if (isOnAuctionBritish) {
      console.log("cansh", formatUnits(auctionIdBritis as any, 0), parseEther(bidPrice));
      bidBritish([formatUnits(auctionIdBritis as any, 0), parseEther(bidPrice)]);
    } else if (isOnAuctionDutch) {
      const res = bidDutch([formatUnits(auctionIdDutch as any, 0)]);
      console.log("竞拍结果", formatUnits(auctionIdDutch as any, 0));
    }
  };
  useEffect(() => {
    setErrMsg("");
  }, [selected]);
  const submit = () => {
    if (isPending) return;
    setErrMsg("");
    const _startTime = dayjs(startTime.toDate()).unix();
    if (selected === "british") {
      const args = [parseEther(startPrice), Number(_startTime), CurrentNFT.contractAddress, Number(CurrentNFT.tokenId), Number(interval)];
      createBritish(args);
    } else {
      const args = [CurrentNFT.contractAddress, Number(CurrentNFT.tokenId), parseEther(startPrice), parseEther(floorPrice), Number(_startTime), Number(decayInterval), parseEther(decayAmount), Number(reserveDuration)];
      createDutch(args);
    }
  };
  const cancelAution = async () => {
    if (isOnAuctionBritish) {
      await cancelBritish([auctionIdBritis]);
    } else if (isOnAuctionDutch) {
      await cancelDutch([auctionIdDutch]);
    }
  };
  return (
    // TODO:跨页面数据传递
    <div className="flex w-full h-[93vh] ">
      <div className="w-[70%] flex justify-center items-center">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
          <Image
            src={CurrentNFT.img}
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
          }}
        >
          <Tabs.List className="flex space-x-2">
            <Tabs.Trigger
              value="Info"
              className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
            >
              Info
            </Tabs.Trigger>
            {!CurrentNFT.isOwner && (
              <Tabs.Trigger
                value="Bid"
                className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
              >
                Bid
              </Tabs.Trigger>
            )}

            <Tabs.Trigger
              value="Auction"
              className="px-3 py-1.5 text-sm font-medium text-gray-600  rounded "
            >
              Auction
            </Tabs.Trigger>
          </Tabs.List>

          <div className="pt-3">
            <Tabs.Content value="Info">
              <div className="text-gray-900 py-3">
                <h1 className="text-3xl font-bold mb-2">{CurrentNFT.name}</h1>
                <Text size="2" className="font-bold mb-2 text-gray-500" as="p">
                  {CurrentNFT.description}
                </Text>
                <p className="text-lg font-bold mb-2">
                  Collect Type:
                  {" "}
                  {CurrentNFT.tags.map((tag) => (
                    <Badge
                      size="3"
                      color="indigo"
                      key={tag}
                      className="font-bold mr-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </p>

              </div>
            </Tabs.Content>

            <Tabs.Content value="Bid">
              {/* <Form.Root>
                {
                  isOnAuctionBritish && (
                  <Form.Field className="grid mb-4" name="bidPrice">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-sm font-medium leading-8">
                        Bid Price
                      </Form.Label>
                      <Form.Message
                        className="text-xs text-gray-500"
                        match="valueMissing"
                      >
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
                  )
                } */}
              {/* <Form.Field className="grid mb-4" name="count">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="text-sm font-medium leading-8">
                      Count
                    </Form.Label>
                    <Form.Message
                      className="text-xs text-gray-500"
                      match="valueMissing"
                    >
                      Please enter a count
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      className="w-full bg-white shadow-sm rounded px-3 py-2 text-sm leading-none outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                    />
                  </Form.Control>
                </Form.Field> */}

              {/* <Form.Submit asChild>

                </Form.Submit>
              </Form.Root> */}
              {
              isOnAuctionBritish && (
              <Input
                label="Please enter your Bid Price"
                value={bidPrice}
                onValueChange={setBidPrice}
              />
              )

             }
              <Text>
                {" "}
                Your Balance:
                <Strong>
                  {balances}
                  ETH
                </Strong>
              </Text>
              {errMsg && <Box className="text-[#dc2626] my-2">{errMsg}</Box>}
              <Button onClick={() => bidSubmit()} style={{ width: "100%", marginTop: "1rem" }} className={clsx(isPending && "!bg-[#ccc]")}>
                {isPending && <Spinner className="mr-2" /> }
                <Box>Confirm</Box>
              </Button>
            </Tabs.Content>

            <Tabs.Content value="Auction">
              <Info isOnAuctionBritish={isOnAuctionBritish} isOnAuctionDutch={isOnAuctionDutch} auctionsInfoBritis={auctionsInfoBritis} auctionsInfoDutch={auctionsInfoDutch} />
              <AuctionPanel isOnAuctionBritish={isOnAuctionBritish} isOnAuctionDutch={isOnAuctionDutch} auctionsInfoBritis={auctionsInfoBritis} auctionsInfoDutch={auctionsInfoDutch} />

              {CurrentNFT.isOwner && (isOnAuctionBritish || isOnAuctionDutch ? (
                <Button onClick={() => cancelAution()} className={clsx(isPending && "!bg-[#ccc]")} style={{ width: "100%", marginBottom: "1rem" }}>
                  {isPending && <Spinner className="mr-2" /> }
                  {" "}
                  cancel auction
                </Button>
              ) : (
                <Dialog.Root open={open} onOpenChange={setOpen}>
                  <Dialog.Trigger>
                    <Button style={{ width: "100%", marginBottom: "1rem" }}>
                      Auction
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content maxWidth="380px" minHeight="600px">
                    <Flex justify="between" align="center" className="mb-2">
                      <span className="font-bold text-lg">{CurrentNFT.name}</span>

                      <Dialog.Close>
                        <Cross1Icon className="cursor-pointer" />
                      </Dialog.Close>
                    </Flex>
                    <NTabs
                      fullWidth
                      size="md"
                      aria-label="Tabs form"
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                    >

                      <NTab key="british" title="British">
                        <Input
                          label="start price"
                          value={startPrice}
                          onValueChange={setStartPrice}
                        />
                        <DateInput
                          granularity="second"
                          label="start time"
                          className="mt-3"
                          value={startTime}
                          onChange={setStartTime}
                        />
                        <Input
                          label="interval"
                          className="mt-3"
                          value={interval}
                          onValueChange={setInterval}
                          description="In seconds"
                        />
                      </NTab>
                      <NTab key="dutch" title="Dutch">
                        <Input
                          label="start price"
                          value={startPrice}
                          onValueChange={setStartPrice}
                        />
                        <Input
                          value={floorPrice}
                          onValueChange={setFloorPrice}
                          label="floor price"
                          className="mt-3"
                        />
                        <Input
                          label="reserve duration"
                          value={reserveDuration}
                          onValueChange={setReserveDuration}
                          className="mt-3"
                          description="In seconds"
                        />
                        <DateInput
                          granularity="second"
                          label="start time"
                          className="mt-3"
                          value={startTime}
                          onChange={setStartTime}
                        />
                        <Input
                          value={decayInterval}
                          onValueChange={setDecayInterval}
                          label="decay interval"
                          className="mt-3"
                        />
                        <Input
                          value={decayAmount}
                          onValueChange={setDecayAmount}
                          label="decay amount"
                          className="mt-3"
                        />
                      </NTab>
                    </NTabs>
                    {errMsg && <Box className="text-[#dc2626] my-2">{errMsg}</Box>}
                    <Flex justify="center" align="center" onClick={() => submit()} className={clsx("w-full bg-blue-700 rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer", isPending && "!bg-[#ccc]")}>
                      {isPending && <Spinner className="mr-2" /> }
                      <Box>submit auction</Box>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              ))}

              {/* <div>
                <Text
                  size="2"
                  className="text-green-500 font-bold text-center"
                  as="p"
                >
                  Deadline:
                  {CurrentNFT.deadline}
                </Text>
              </div> */}
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default DetailContainerPage;
