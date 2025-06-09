import Link from "next/link"
import { Diamond } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/terms" className="text-gray-500 hover:text-gray-600">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-gray-600">
            Privacy
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-600">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <Diamond className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-sm font-semibold">Diamond Trade Centre</span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} Diamond Trade Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
