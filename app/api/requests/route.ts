import {
  createRequest,
  getRequests,
  updateRequest,
} from "@/services/requests.service";
import { NextResponse } from "next/server";
import { Requests } from "@/logic/types/requests";
export async function GET() {
  const requests = await getRequests();
  return NextResponse.json(requests);
}
export async function POST(request: Request) {
  //parse data first
  const data = await request.json();

  const addRequest = await createRequest(data);

  //Sends a created request with http code
  return NextResponse.json(addRequest, { status: 201 });
}
