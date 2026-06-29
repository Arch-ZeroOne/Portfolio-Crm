import { rejectRequest } from "@/services/requests.service";
import { NextResponse } from "next/server";
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  //parse data first

  const { id } = await params;

  const updated = await rejectRequest(Number(id));

  //Sends a created request with http code
  return NextResponse.json(updated, { status: 201 });
}
