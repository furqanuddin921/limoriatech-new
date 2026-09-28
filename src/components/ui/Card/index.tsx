import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  padding = true,
  hoverEffect = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300",
        padding && "p-6 sm:p-8",
        hoverEffect && "hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
