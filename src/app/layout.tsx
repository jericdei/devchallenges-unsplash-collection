import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "../globals.css"
import Header from "@/components/header/header"
import { cn } from "@/lib/utils"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
})

export const metadata: Metadata = {
  title: "UnsplashBox",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          beVietnamPro.className,
          "bg-primary-50 dark:bg-primary-600 dark:text-primary-50",
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  )
}
