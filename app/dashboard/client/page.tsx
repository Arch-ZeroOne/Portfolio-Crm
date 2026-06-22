import React from "react";
import { columns, Payment } from "./columns";
import { DataTables } from "./data-table";
async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}
const Page = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10 mr-auto ml-auto">
      <DataTables columns={columns} data={data} />
    </div>
  );
};

export default Page;
