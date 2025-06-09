import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Eye, GemIcon, MoreHorizontal, ShoppingCart, Trash } from "lucide-react"
import Image from "next/image"

interface JewelleryItem {
  id: string
  name: string
  image: string
  category: string
  description: string
  metal: string
  diamondDetails: string
  price: number
  status: string
  dateAdded: string
}

interface JewelleryListProps {
  view: "grid" | "table"
  jewelleryItems: JewelleryItem[]
}

export function JewelleryList({ view, jewelleryItems }: JewelleryListProps) {
  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jewelleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-64 bg-gray-100">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-white text-black">{item.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.id}</p>
                </div>
                <Badge variant={item.status === "In Stock" ? "outline" : "secondary"}>{item.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm mt-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Metal:</span>
                  <span className="font-medium">{item.metal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Diamonds:</span>
                  <span className="font-medium text-right">{item.diamondDetails}</span>
                </div>
              </div>
              <div className="mt-4 text-lg font-bold">${item.price.toLocaleString()}</div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Order
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Diamonds</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jewelleryItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
                    <GemIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">Added: {item.dateAdded}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>Category: {item.category}</div>
                  <div>Metal: {item.metal}</div>
                  <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">{item.diamondDetails}</div>
              </TableCell>
              <TableCell className="text-right font-bold">${item.price.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Badge variant={item.status === "In Stock" ? "outline" : "secondary"}>{item.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Order
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
