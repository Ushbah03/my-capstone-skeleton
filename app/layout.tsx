import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio Capstone",
  description: "Built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 antialiased">
        {/* Navigation Navbar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-blue-600">
              🚀 Capstone Layout
            </Link>
            <div className="flex space-x-6">
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Projects
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/health" className="text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
                Health Check
              </Link>
            </div>
          </nav>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}