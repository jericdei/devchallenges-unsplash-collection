import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
}

export default function Skeleton({
  height,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn("bg-primary-400 animate-pulse rounded-lg", className)}
      style={{ height }}
      {...props}
    ></div>
  );
}
