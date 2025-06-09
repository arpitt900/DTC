import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, Diamond, Eye, MoreHorizontal, ShoppingCart } from "lucide-react"

export function DiamondSearchResults() {
  return (
    <div className="bg-gray-900 text-gray-100 rounded-md shadow-lg border border-gray-700">
      {/* Terminal-style header */}
      <div className="flex items-center h-8 bg-gray-800 rounded-t-md px-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="ml-4 text-sm font-mono text-gray-400">Diamond Search Results</div>
        <div className="flex items-center space-x-2 ml-auto">
          <span className="text-xs text-green-500 animate-pulse">●</span>
          <span className="text-xs text-gray-400">Online</span>
        </div>
      </div>

      <CardContent className="p-4">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-gray-300">
              <TableHead className="w-[80px] font-mono text-sm">Image</TableHead>
              <TableHead className="font-mono text-sm">
                <div className="flex items-center">
                  Shape
                  <ArrowUpDown className="ml-2 h-4 w-4 text-cyan-500" />
                </div>
              </TableHead>
              <TableHead className="font-mono text-sm">
                <div className="flex items-center">
                  Carat
                  <ArrowUpDown className="ml-2 h-4 w-4 text-cyan-500" />
                </div>
              </TableHead>
              <TableHead className="font-mono text-sm">Color</TableHead>
              <TableHead className="font-mono text-sm">Clarity</TableHead>
              <TableHead className="font-mono text-sm">Cut</TableHead>
              <TableHead className="font-mono text-sm">Lab</TableHead>
              <TableHead className="font-mono text-sm">
                <div className="flex items-center">
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4 text-cyan-500" />
                </div>
              </TableHead>
              <TableHead className="text-right font-mono text-sm">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {diamondResults.map((diamond) => (
              <TableRow key={diamond.id} className="border-b border-gray-700">
                <TableCell>
                  <div className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center">
                    <Diamond className="h-6 w-6 text-cyan-500" />
                  </div>
                </TableCell>
                <TableCell className="font-medium font-mono text-sm">{diamond.shape}</TableCell>
                <TableCell className="font-mono text-sm">{diamond.carat}</TableCell>
                <TableCell className="font-mono text-sm">{diamond.color}</TableCell>
                <TableCell className="font-mono text-sm">{diamond.clarity}</TableCell>
                <TableCell className="font-mono text-sm">{diamond.cut}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-gray-700 border-gray-600 text-cyan-400 font-mono text-sm">
                    {diamond.lab}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium font-mono text-sm text-green-500">
                  ${diamond.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700 text-gray-300">
                      <Eye className="h-4 w-4 text-cyan-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700 text-gray-300">
                      <ShoppingCart className="h-4 w-4 text-cyan-500" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-700 text-gray-300">
                          <MoreHorizontal className="h-4 w-4 text-cyan-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 border border-gray-700 text-gray-300">
                        <DropdownMenuLabel className="text-sm text-gray-400">Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-sm">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-sm">
                          Add to Cart
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-sm">
                          Request Hold
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-700" />
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-sm">
                          Compare
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-sm">
                          Download Certificate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-400 font-mono">
          <div>
            Showing <strong className="text-green-500">1-10</strong> of <strong className="text-green-500">142</strong>{" "}
            results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="bg-gray-700 border-gray-600 text-gray-500 hover:bg-gray-600"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-gray-100"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
  )
}

const diamondResults = [
  {
    id: "DIA-001",
    shape: "Round",
    carat: 1.01,
    color: "F",
    clarity: "VS1",
    cut: "Excellent",
    lab: "GIA",
    price: 7850,
  },
  {
    id: "DIA-002",
    shape: "Oval",
    carat: 1.52,
    color: "G",
    clarity: "VS2",
    cut: "Very Good",
    lab: "GIA",
    price: 9200,
  },
  {
    id: "DIA-003",
    shape: "Cushion",
    carat: 2.03,
    color: "H",
    clarity: "SI1",
    cut: "Excellent",
    lab: "IGI",
    price: 12500,
  },
  {
    id: "DIA-004",
    shape: "Princess",
    carat: 1.25,
    color: "E",
    clarity: "VVS2",
    cut: "Excellent",
    lab: "GIA",
    price: 9800,
  },
  {
    id: "DIA-005",
    shape: "Emerald",
    carat: 1.7,
    color: "D",
    clarity: "VS1",
    cut: "Excellent",
    lab: "GIA",
    price: 15200,
  },
  {
    id: "DIA-006",
    shape: "Pear",
    carat: 1.35,
    color: "G",
    clarity: "VS2",
    cut: "Very Good",
    lab: "HRD",
    price: 8400,
  },
  {
    id: "DIA-007",
    shape: "Round",
    carat: 0.91,
    color: "F",
    clarity: "SI1",
    cut: "Excellent",
    lab: "GIA",
    price: 5200,
  },
  {
    id: "DIA-008",
    shape: "Marquise",
    carat: 1.15,
    color: "H",
    clarity: "VS1",
    cut: "Very Good",
    lab: "IGI",
    price: 6800,
  },
  {
    id: "DIA-009",
    shape: "Round",
    carat: 2.51,
    color: "G",
    clarity: "VS2",
    cut: "Excellent",
    lab: "GIA",
    price: 28500,
  },
  {
    id: "DIA-010",
    shape: "Radiant",
    carat: 1.82,
    color: "I",
    clarity: "SI1",
    cut: "Very Good",
    lab: "HRD",
    price: 10200,
  },
]
