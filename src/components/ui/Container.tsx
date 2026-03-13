import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`max-w-[1200px] lg:max-w-[1280px] xl:max-w-[1320px] mx-auto px-6 md:px-10 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}
