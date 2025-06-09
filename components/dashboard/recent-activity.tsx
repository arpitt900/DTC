import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart, Upload, User } from "lucide-react"

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest transactions and system activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex">
              <div className="relative mr-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                  {activity.type === "order" && <ShoppingCart className="h-4 w-4 text-emerald-600" />}
                  {activity.type === "inventory" && <Package className="h-4 w-4 text-blue-600" />}
                  {activity.type === "upload" && <Upload className="h-4 w-4 text-purple-600" />}
                  {activity.type === "user" && <User className="h-4 w-4 text-orange-600" />}
                </div>
                {index < activities.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 top-9 -ml-px w-px bg-gray-200" />
                )}
              </div>
              <div className="flex-1 space-y-1 pt-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <Badge
                    variant={
                      activity.status === "Completed"
                        ? "outline"
                        : activity.status === "Pending"
                          ? "secondary"
                          : "default"
                    }
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-6">
          View All Activity
        </Button>
      </CardContent>
    </Card>
  )
}

const activities = [
  {
    type: "order",
    title: "New order received",
    description: "Order #DTC-12345 for 3 diamonds (2.5ct total) - $12,850",
    status: "Pending",
    time: "10 minutes ago",
  },
  {
    type: "inventory",
    title: "Inventory updated",
    description: "Stock levels adjusted for Round Brilliant, 1.0-1.5ct category",
    status: "Completed",
    time: "1 hour ago",
  },
  {
    type: "upload",
    title: "Inventory file uploaded",
    description: "diamonds-may-2025.xlsx with 156 items processed successfully",
    status: "Completed",
    time: "3 hours ago",
  },
  {
    type: "user",
    title: "New buyer registered",
    description: "Jewelry retailer from Mumbai, India joined the platform",
    status: "Completed",
    time: "5 hours ago",
  },
  {
    type: "order",
    title: "Order fulfilled",
    description: "Order #DTC-12340 shipped to Hong Kong - Tracking provided",
    status: "Completed",
    time: "1 day ago",
  },
]
