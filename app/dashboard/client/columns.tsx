"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//* Defiinition of the column structure
import { Requests } from "@/logic/types/requests";
// todo Learn and document how this works
export const columns: ColumnDef<Requests>[] = [
  {
    accessorKey: "client_email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Email
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "project_type_id",
    header: "Project Type",
  },
  { accessorKey: "message", header: "Message" },
  { accessorKey: "appointment", header: "Appointment" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "client_id", header: "Client Id" },
  { accessorKey: "created_at", header: "Request Date" },
  { accessorKey: "updated_at", header: "Completed Date" },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Request</DropdownMenuItem>
            <DropdownMenuItem>Approve Request</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
