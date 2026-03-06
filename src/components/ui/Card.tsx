import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-card rounded-xl border border-border p-6 hover:border-muted/50 transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}
