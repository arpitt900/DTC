import { NextResponse } from "next/server"
import { generateDiamondRecommendations } from "@/lib/ai-utils"

export async function POST(request: Request) {
  try {
    const { userProfile } = await request.json()

    if (!userProfile) {
      return NextResponse.json({ error: "User profile is required" }, { status: 400 })
    }

    const recommendations = await generateDiamondRecommendations(userProfile)

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("Error generating recommendations:", error)
    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
