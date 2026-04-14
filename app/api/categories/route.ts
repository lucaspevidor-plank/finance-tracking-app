import { NextResponse } from "next/server";
import { categories } from "@/app/lib/mock-data";

export async function GET() {
  return NextResponse.json(categories);
}
