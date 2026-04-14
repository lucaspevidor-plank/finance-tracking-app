import { NextResponse } from "next/server";
import { totalBalance, monthlyGoal } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json({ totalBalance, monthlyGoal });
}
