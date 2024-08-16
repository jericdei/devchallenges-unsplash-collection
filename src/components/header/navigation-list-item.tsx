"use client"

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { LinkHTMLAttributes, PropsWithChildren } from "react"

type LinkPropsWithChildren = LinkProps &
  PropsWithChildren<LinkHTMLAttributes<HTMLAnchorElement>>

export default function NavigationListItem({
  href,
  children,
  className,
  ...props
}: LinkPropsWithChildren) {
  const pathname = usePathname()

  return (
    <li>
      <Link
        className={cn(
          "description rounded-md px-5 py-2",
          pathname === href && "bg-primary-500 text-primary-600",
          className,
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
