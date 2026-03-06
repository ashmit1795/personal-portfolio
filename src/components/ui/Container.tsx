import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`max-w-[1280px] xl:max-w-[1400px] mx-auto px-8 lg:px-12 w-full space-y-10 ${className}`}>
      {children}
    </div>
  );
}
