import React from "react";
import { columns, Payment } from "./columns";
import { DataTables } from "./data-table";
async function getData(): Promise<Payment[]> {
  return [
    {
      email: "john.doe@example.com",
      project_type_id: 1,
      message: "I'd like to discuss a new company website redesign.",
      appointment: "2026-06-30T10:00:00Z",
      status: "pending",
    },
    {
      email: "jane.smith@example.com",

      project_type_id: 2,
      message: "Need a mobile app for our delivery service.",
      appointment: "2026-07-02T14:30:00Z",
      status: "success",
    },
    {
      email: "alex.johnson@example.com",
      project_type_id: 3,
      message: "Requesting a CRM system demo.",
      appointment: "2026-07-05T09:00:00Z",
      status: "failed",
    },
    {
      email: "sarah.lee@example.com",

      project_type_id: 1,
      message: "Interested in migrating our website to Next.js.",
      appointment: "2026-07-08T16:00:00Z",
      status: "failed",
    },
    {
      email: "michael.brown@example.com",
      project_type_id: 4,
      message: "Looking for an inventory management solution.",
      appointment: "2026-07-10T11:15:00Z",
      status: "pending",
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
