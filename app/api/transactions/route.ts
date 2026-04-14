import { NextResponse } from "next/server";
import { transactions } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json(transactions);
}
