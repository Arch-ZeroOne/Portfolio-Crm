import { updateRequest } from "@/services/requests.service";
import { NextResponse } from "next/server";
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  //parse data first
  const data = await request.json();
  const { id } = await params;
  data.request_id = +id;

  const updated = await updateRequest(data);

  //Sends a created request with http code
  return NextResponse.json(updated, { status: 201 });
}
