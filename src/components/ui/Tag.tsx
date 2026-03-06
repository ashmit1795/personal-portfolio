import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-md bg-transparent border border-border text-muted inline-flex items-center ${className}`}>
      {children}
    </span>
  );
}
