import prisma from "@/lib/prisma";
import { Client } from "../logic/types/client";
export async function getClients() {
  return prisma.client.findMany();
}
export async function createClient(data: {
  client_email: string;
}): Promise<Client> {
  return prisma.client.create({ data });
}
