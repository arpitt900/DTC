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
import { Edit, Eye, MoreHorizontal, ShoppingCart, Trash } from "lucide-react"
import Image from "next/image"
import { Diamond } from "lucide-react"

interface DiamondProps {
  id: string
  image: string
  shape: string
  carat: number
  color: string
  clarity: string
  cut: string
  polish: string
  symmetry: string
  fluorescence: string
  lab: string
  certNumber: string
  price: number
  status: string
  dateAdded: string
}

interface CertifiedDiamondsListProps {
  view: "grid" | "table"
  diamonds: DiamondProps[]
}

export function CertifiedDiamondsList({ view, diamonds }: CertifiedDiamondsListProps) {
  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {diamonds.map((diamond) => (
          <Card key={diamond.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 bg-gray-100">
                {diamond.image ? (
                  <Image
                    src={diamond.image || "/placeholder.svg"}
                    alt={`${diamond.shape} diamond ${diamond.carat}ct`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Diamond className="h-16 w-16 text-emerald-600" />
                  </div>
                )}
                <Badge className="absolute top-2 right-2 bg-white text-black">{diamond.lab}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">
                    {diamond.shape} {diamond.carat}ct
                  </h3>
                  <p className="text-sm text-muted-foreground">{diamond.id}</p>
                </div>
                <Badge variant={diamond.status === "In Stock" ? "outline" : "secondary"}>{diamond.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color:</span>
                  <span className="font-medium">{diamond.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clarity:</span>
                  <span className="font-medium">{diamond.clarity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cut:</span>
                  <span className="font-medium">{diamond.cut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Polish:</span>
                  <span className="font-medium">{diamond.polish}</span>
                </div>
              </div>
              <div className="mt-4 text-lg font-bold">${diamond.price.toLocaleString()}</div>
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
            <TableHead>Details</TableHead>
            <TableHead>Specifications</TableHead>
            <TableHead>Certification</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {diamonds.map((diamond) => (
            <TableRow key={diamond.id}>
              <TableCell className="font-medium">{diamond.id}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
                    <Diamond className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {diamond.shape} {diamond.carat}ct
                    </div>
                    <div className="text-xs text-muted-foreground">Added: {diamond.dateAdded}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>Color: {diamond.color}</div>
                  <div>Clarity: {diamond.clarity}</div>
                  <div>Cut: {diamond.cut}</div>
                  <div>Polish: {diamond.polish}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{diamond.lab}</Badge>
                  <span className="text-sm">{diamond.certNumber}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-bold">${diamond.price.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Badge variant={diamond.status === "In Stock" ? "outline" : "secondary"}>{diamond.status}</Badge>
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
