import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Check, Database, Download, FileSpreadsheet, FileText, Upload } from "lucide-react"

export default function InventoryUploadPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Inventory</h1>
          <p className="text-muted-foreground">Add your diamond and jewellery inventory to the platform</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Templates
          </Button>
        </div>
      </div>

      <Tabs defaultValue="excel">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="excel">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Excel Upload
          </TabsTrigger>
          <TabsTrigger value="api">
            <Database className="h-4 w-4 mr-2" />
            API Integration
          </TabsTrigger>
          <TabsTrigger value="ftp">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            FTP Integration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="excel" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Excel File Upload</CardTitle>
              <CardDescription>Upload your inventory using our Excel template format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inventory-type">Inventory Type</Label>
                  <Select defaultValue="certified">
                    <SelectTrigger id="inventory-type">
                      <SelectValue placeholder="Select inventory type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="certified">Certified Diamonds</SelectItem>
                      <SelectItem value="non-certified">Non-Certified Diamonds</SelectItem>
                      <SelectItem value="jewellery">Jewellery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border-2 border-dashed rounded-lg p-10 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="rounded-full bg-gray-100 p-3">
                      <Upload className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Drag and drop your Excel file here, or click to browse</p>
                      <p className="text-xs text-muted-foreground">Supports .xlsx and .csv files up to 10MB</p>
                    </div>
                    <Button size="sm">Browse Files</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="price-markup">Price Markup (%)</Label>
                    <span className="text-xs text-muted-foreground">Optional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input id="price-markup" type="number" placeholder="0" />
                    <span className="text-sm">%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Apply a percentage markup to all items in this upload</p>
                </div>

                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Inventory
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Your recent inventory uploads and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-gray-100 p-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{upload.filename}</p>
                        <p className="text-xs text-muted-foreground">
                          {upload.date} • {upload.items} items
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {upload.status === "Completed" ? (
                        <div className="flex items-center text-emerald-600 text-sm">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Completed</span>
                        </div>
                      ) : (
                        <div className="text-amber-600 text-sm">Processing</div>
                      )}
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>Connect your inventory system directly to our platform via API</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="api-key">Your API Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="api-key" value="dtc_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" readOnly />
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Keep this key secure. It provides full access to your inventory.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>API Endpoints</Label>
                  <div className="rounded-md bg-gray-50 p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm">POST /api/v1/inventory/diamonds</code>
                        <Button variant="ghost" size="sm">
                          Copy
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Upload certified and non-certified diamonds</p>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm">POST /api/v1/inventory/jewellery</code>
                        <Button variant="ghost" size="sm">
                          Copy
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Upload jewellery items</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Documentation</Label>
                  <p className="text-sm">
                    View our comprehensive API documentation to integrate your inventory system.
                  </p>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button>View API Documentation</Button>
                    <Button variant="outline">Download Postman Collection</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ftp" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>FTP Integration</CardTitle>
              <CardDescription>Set up automatic inventory synchronization via FTP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ftp-host">FTP Host</Label>
                  <Input id="ftp-host" value="ftp.diamondtradecentre.com" readOnly />
                </div>

                <div className="grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ftp-username">Username</Label>
                    <Input id="ftp-username" value="your_company_name" readOnly />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ftp-password">Password</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="ftp-password" type="password" value="••••••••••••" readOnly />
                      <Button variant="outline" size="sm">
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Upload Directories</Label>
                  <div className="rounded-md bg-gray-50 p-4 space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">/certified/</p>
                      <p className="text-xs text-muted-foreground">For certified diamond inventory files</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium">/non-certified/</p>
                      <p className="text-xs text-muted-foreground">For non-certified diamond inventory files</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium">/jewellery/</p>
                      <p className="text-xs text-muted-foreground">For jewellery inventory files</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Sync Schedule</Label>
                  <Select defaultValue="hourly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sync frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="manual">Manual Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How often we should check for new files in your FTP directories
                  </p>
                </div>

                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save FTP Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const recentUploads = [
  {
    filename: "certified-diamonds-may-2025.xlsx",
    date: "May 19, 2025",
    items: 156,
    status: "Completed",
  },
  {
    filename: "non-certified-inventory.xlsx",
    date: "May 18, 2025",
    items: 89,
    status: "Completed",
  },
  {
    filename: "jewellery-collection-spring.xlsx",
    date: "May 17, 2025",
    items: 42,
    status: "Processing",
  },
]
