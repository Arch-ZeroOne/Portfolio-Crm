import React from "react";
import { columns } from "./columns";
import { DataTables } from "./data-table";
import { getRequests } from "@/services/requests.service";

const Page = async () => {
  const data = await getRequests();
  return (
    <div className="container mx-auto py-10 mr-auto ml-auto">
      <DataTables columns={columns} data={data} />
    </div>
  );
};

export default Page;
