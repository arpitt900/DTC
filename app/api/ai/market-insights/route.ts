import { NextResponse } from "next/server"
import { generateMarketInsights } from "@/lib/ai-utils"

export async function POST(request: Request) {
  try {
    const { region } = await request.json()

    if (!region) {
      return NextResponse.json({ error: "Region is required" }, { status: 400 })
    }

    const insights = await generateMarketInsights(region)

    return NextResponse.json({ insights })
  } catch (error) {
    console.error("Error generating market insights:", error)
    return NextResponse.json({ error: "Failed to generate market insights" }, { status: 500 })
  }
}
