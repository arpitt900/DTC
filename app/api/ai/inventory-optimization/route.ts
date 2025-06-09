import { NextResponse } from "next/server"
import { generateInventoryOptimization } from "@/lib/ai-utils"

export async function POST(request: Request) {
  try {
    const { inventory } = await request.json()

    if (!inventory) {
      return NextResponse.json({ error: "Inventory data is required" }, { status: 400 })
    }

    const optimizations = await generateInventoryOptimization(inventory)

    return NextResponse.json({ optimizations })
  } catch (error) {
    console.error("Error generating inventory optimizations:", error)
    return NextResponse.json({ error: "Failed to generate inventory optimizations" }, { status: 500 })
  }
}
