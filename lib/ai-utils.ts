import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function generateDiamondRecommendations(userProfile: any) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    system: `You are an AI assistant for a diamond trading platform. 
    Your task is to analyze user profiles, search history, and regional preferences to suggest the most relevant diamonds.
    Provide recommendations in JSON format with the following structure:
    {
      "recommendations": [
        {
          "type": "diamond",
          "shape": "...",
          "carat": "...",
          "color": "...",
          "clarity": "...",
          "cut": "...",
          "price": "...",
          "matchScore": "...",
          "reasoning": "..."
        }
      ]
    }`,
    prompt: `Generate diamond recommendations for the following user profile:
    ${JSON.stringify(userProfile, null, 2)}
    
    Consider their location, past purchases, search history, and regional trends.
    Provide 3-5 specific diamond recommendations that would be most relevant to this user.`,
  })

  return JSON.parse(text)
}

export async function generateMarketInsights(region: string) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    system: `You are an AI market analyst for a diamond trading platform.
    Your task is to analyze market trends and provide insights for specific regions.
    Provide insights in JSON format with the following structure:
    {
      "insights": [
        {
          "category": "...",
          "trend": "...",
          "insight": "...",
          "confidence": "..."
        }
      ]
    }`,
    prompt: `Generate diamond market insights for the ${region} region.
    
    Consider current trends, pricing movements, popular shapes and sizes, and any regional preferences.
    Provide 3-5 specific market insights that would be valuable for diamond traders in this region.`,
  })

  return JSON.parse(text)
}

export async function generateInventoryOptimization(inventory: any) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    system: `You are an AI inventory optimization assistant for a diamond trading platform.
    Your task is to analyze current inventory and market trends to suggest inventory optimizations.
    Provide recommendations in JSON format with the following structure:
    {
      "optimizations": [
        {
          "title": "...",
          "description": "...",
          "impact": "High|Medium|Low"
        }
      ]
    }`,
    prompt: `Generate inventory optimization recommendations based on the following inventory data:
    ${JSON.stringify(inventory, null, 2)}
    
    Consider current market trends, pricing movements, and regional demand.
    Provide 3-5 specific inventory optimization recommendations.`,
  })

  return JSON.parse(text)
}
