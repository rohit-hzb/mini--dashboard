import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "User Dashboard",
  description: "A mini dashboard built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-100 text-gray-900 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <nav className="max-w-5xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              User Dashboard
            </h1>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </nav>
        </header>

        <main className="flex-grow max-w-5xl mx-auto p-6">{children}</main>

        <footer className="bg-white border-t py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mini Dashboard Project
        </footer>
      </body>
    </html>
  );
}
