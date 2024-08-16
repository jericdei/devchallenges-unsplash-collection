"use client"

import { InputHTMLAttributes } from "react"
import Search from "./vector/search"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export default function SearchInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const router = useRouter()

  const searchParams = useSearchParams()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return
    }

    router.push(`/search?q=${e.currentTarget.value}`)
  }

  return (
    <div className={cn("relative w-full", className)}>
      <input
        className="hide-clear w-full rounded-lg border-primary-400 py-3 pl-4 pr-12 shadow-sm placeholder:text-sm focus:border-primary-400 focus:outline-none focus:ring-0 dark:bg-primary-500 dark:text-primary-50 dark:placeholder:text-primary-400"
        placeholder="Enter your keywords..."
        type="search"
        defaultValue={searchParams.get("q") || ""}
        onKeyDown={handleKeyDown}
        {...props}
      />

      <Search className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  )
}
