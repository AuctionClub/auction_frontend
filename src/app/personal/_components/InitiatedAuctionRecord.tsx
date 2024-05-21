import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Table } from '@radix-ui/themes';
import React from 'react'

const InitiatedAuctionRecord = () => {
   return (
    <div className="p-5 hover:shadow-lg shadow-md">
      <div className="md:max-w-screen-lg flex-1 ">
        <div className="flex justify-between font-bold text-lg">
          <div>Initiated Auction Record</div>
          {/* <div className="flex items-center cursor-pointer">
            more
            <ChevronRightIcon className="w-5 h-5" />
          </div> */}
        </div>
 
      </div>
       <Table.Root variant="surface" size="2">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Index</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Starting Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Final Price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>1</Table.RowHeaderCell>
            <Table.Cell>1 ETH</Table.Cell>
            <Table.Cell>1.8 ETH</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>2</Table.RowHeaderCell>
            <Table.Cell>2 ETH</Table.Cell>
            <Table.Cell>25 ETH</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>3</Table.RowHeaderCell>
            <Table.Cell>3 ETH</Table.Cell>
            <Table.Cell>5 ETH</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default InitiatedAuctionRecord