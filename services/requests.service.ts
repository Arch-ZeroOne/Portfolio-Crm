import prisma from "@/lib/prisma";
import { Requests } from "@/logic/types/requests";
export async function getRequests() {
  return await prisma.requests.findMany();
}

export async function createRequest(data: {
  client_email: string;
  project_type_id: number;
  message: string;
  appointment: Date;
  status: string;
  client_id: number;
  created_at: Date;
  updated_at: Date;
}): Promise<Requests> {
  return prisma.requests.create({ data });
}
export async function updateRequest(data: {
  request_id: number;
  client_email: string;
  project_type_id: number;
  message: string;
  appointment: Date;
  status: string;
  client_id: number;
  created_at: Date;
  updated_at: Date;
}): Promise<Requests> {
  return prisma.requests.update({
    where: {
      request_id: data.request_id,
    },
    data,
  });
}

export async function rejectRequest(request_id: number) {
  return prisma.requests.update({
    where: {
      request_id,
    },
    data: {
      status: "Rejected",
    },
  });
}
