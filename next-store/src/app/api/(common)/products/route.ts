import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let data = await req.json();
  console.log(data);

  return NextResponse.json({ status: 200 });
}
