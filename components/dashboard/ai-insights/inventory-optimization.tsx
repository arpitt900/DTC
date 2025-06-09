import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export function InventoryOptimization() {
  return (
    <div className="space-y-6 font-mono text-sm">
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            <span className="text-green-500">$</span> Inventory Health Analysis
          </CardTitle>
          <CardDescription className="text-gray-400">
            AI assessment of your current inventory composition and health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold mb-2 text-green-500">
                <span className="text-blue-500">&gt;&gt;</span> Inventory Composition
              </h3>
              <div className="h-[200px] bg-gray-800 rounded-md flex items-center justify-center mb-4 border border-gray-700">
                <p className="text-gray-500">
                  <span className="animate-pulse">Scanning...</span> Inventory composition chart
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span>Inventory Turnover Rate:</span>
                  <Badge variant="outline" className="border-gray-700 text-white">
                    4.2x annually
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>Average Days to Sell:</span>
                  <Badge variant="outline" className="border-gray-700 text-white">
                    87 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>Slow-Moving Inventory:</span>
                  <Badge variant="outline" className="text-amber-500 border-gray-700">
                    18% of total
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2 text-green-500">
                <span className="text-blue-500">&gt;&gt;</span> Inventory Health Score
              </h3>
              <div className="bg-gray-800 rounded-md p-4 text-center mb-4 border border-gray-700">
                <div className="text-4xl font-bold text-emerald-500 mb-1">76</div>
                <div className="text-xs text-gray-400">out of 100</div>
                <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                  <div className="bg-emerald-500 h-1 rounded-full" style={{ width: "76%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span>Diversity Score:</span>
                  <Badge variant="outline" className="text-emerald-500 border-gray-700">
                    82/100
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>Market Alignment:</span>
                  <Badge variant="outline" className="text-emerald-500 border-gray-700">
                    78/100
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>Aging Score:</span>
                  <Badge variant="outline" className="text-amber-500 border-gray-700">
                    68/100
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            <span className="text-green-500">$</span> Inventory Optimization Recommendations
          </CardTitle>
          <CardDescription className="text-gray-400">
            AI-generated recommendations to optimize your inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-semibold mb-2 text-green-500">
                <span className="text-blue-500">&gt;&gt;</span> Categories to Increase
              </h3>
              <div className="space-y-3">
                {increaseCategories.map((category, index) => (
                  <div key={index} className="border rounded-md p-3 border-gray-700">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-start">
                        <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{category.name}</h4>
                          <p className="text-xs text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-emerald-500 border-gray-700">
                        +{category.recommendedIncrease}%
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span>Current inventory level</span>
                        <span>{category.currentLevel}% of optimal</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div
                          className="bg-emerald-500 h-1 rounded-full"
                          style={{ width: `${category.currentLevel}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs">
                      <span className="font-medium">Reasoning: </span>
                      <span className="text-gray-400">{category.reasoning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2 text-green-500">
                <span className="text-blue-500">&gt;&gt;</span> Categories to Reduce
              </h3>
              <div className="space-y-3">
                {reduceCategories.map((category, index) => (
                  <div key={index} className="border rounded-md p-3 border-gray-700">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-start">
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{category.name}</h4>
                          <p className="text-xs text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-red-500 border-gray-700">
                        {category.recommendedReduction}%
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-0.5">
                        <span>Current inventory level</span>
                        <span>{category.currentLevel}% of optimal</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div
                          className="bg-red-500 h-1 rounded-full"
                          style={{ width: `${Math.min(100, category.currentLevel)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs">
                      <span className="font-medium">Reasoning: </span>
                      <span className="text-gray-400">{category.reasoning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const increaseCategories = [
  {
    name: "Oval Diamonds, 1.5-2.0ct, VS clarity",
    description: "Premium oval diamonds in the 1.5-2.0ct range with VS clarity",
    currentLevel: 45,
    recommendedIncrease: 35,
    reasoning:
      "Strong demand growth (+28% in last quarter) with limited current inventory. Average sell-through time of 32 days compared to 87 days overall average.",
  },
  {
    name: "Lab-Grown Round Brilliants, 1.0-1.5ct",
    description: "Lab-grown round brilliant diamonds in the 1.0-1.5ct range",
    currentLevel: 30,
    recommendedIncrease: 50,
    reasoning:
      "Rapidly growing market segment with 42% YoY growth. Current inventory meets only 30% of projected demand for next quarter.",
  },
  {
    name: "Emerald Cut, 2.0-3.0ct, VVS-VS clarity",
    description: "Premium emerald cut diamonds in larger carat weights",
    currentLevel: 25,
    recommendedIncrease: 40,
    reasoning:
      "Growing demand in luxury segment with strong margins. Current inventory is significantly below optimal levels based on recent sales trends.",
  },
]

const reduceCategories = [
  {
    name: "Princess Cut, 0.5-1.0ct, SI clarity",
    description: "Smaller princess cut diamonds with SI clarity",
    currentLevel: 165,
    recommendedReduction: -40,
    reasoning:
      "Declining demand (-15% in last quarter) with current inventory exceeding 6-month projected demand by 65%. Average sell-through time of 142 days.",
  },
  {
    name: "Round Brilliants, 0.3-0.5ct, I-J color",
    description: "Smaller round brilliants with lower color grades",
    currentLevel: 140,
    recommendedReduction: -30,
    reasoning:
      "Market shifting toward larger carat weights and higher color grades. Current inventory significantly exceeds projected demand.",
  },
  {
    name: "Marquise, all sizes",
    description: "Marquise cut diamonds across all specifications",
    currentLevel: 125,
    recommendedReduction: -25,
    reasoning:
      "Consistent decline in popularity over last 3 quarters with slow sell-through rates. Consider special promotions to reduce existing inventory.",
  },
]
