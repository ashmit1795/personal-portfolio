import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`max-w-[1100px] mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
