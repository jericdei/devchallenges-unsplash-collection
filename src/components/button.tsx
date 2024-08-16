import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftComponent?: ReactNode
}

export default function Button({
  children,
  className,
  leftComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "description flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-primary-600",
        className,
      )}
      {...props}
    >
      {leftComponent}
      {children}
    </button>
  )
}
