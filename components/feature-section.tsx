import { Diamond, ShieldCheck, Zap, Globe, TrendingUp, Search, Truck, BarChart4, FileText } from "lucide-react"

const features = [
  {
    name: "Certified & Non-Certified Diamonds",
    description: "Trade both certified and non-certified diamonds with complete transparency and trust.",
    icon: Diamond,
  },
  {
    name: "AI-Powered Recommendations",
    description:
      "Our AI analyzes user profiles, search history, and regional preferences to suggest the most relevant diamonds.",
    icon: Zap,
  },
  {
    name: "Global Trading Network",
    description: "Connect with diamond traders from around the world in a secure, privacy-focused environment.",
    icon: Globe,
  },
  {
    name: "Market Trend Analysis",
    description: "Get AI-powered insights on market trends, pricing forecasts, and inventory optimization.",
    icon: TrendingUp,
  },
  {
    name: "Advanced Search Filters",
    description: "Find the perfect diamonds with our comprehensive search filters for all specifications.",
    icon: Search,
  },
  {
    name: "Secure Transactions",
    description: "Trade with confidence through our secure payment gateway and privacy protection.",
    icon: ShieldCheck,
  },
  {
    name: "One-Click Delivery",
    description: "Seamless logistics integration for quick and reliable diamond delivery across multiple countries.",
    icon: Truck,
  },
  {
    name: "Business Analytics",
    description: "Comprehensive dashboard with sales metrics, inventory insights, and performance analytics.",
    icon: BarChart4,
  },
  {
    name: "Easy Inventory Management",
    description: "Upload and manage your diamond inventory through Excel, API, or FTP integration.",
    icon: FileText,
  },
]

export function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Trade Smarter</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to trade diamonds globally
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform connects buyers and sellers while providing valuable insights to optimize your
            diamond trading business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
