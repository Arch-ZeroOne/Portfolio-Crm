import { createClient, getClients } from "@/services/client.service";
import { NextResponse } from "next/server";

export async function GET() {
  const clients = await getClients();

  return NextResponse.json(clients);
}
