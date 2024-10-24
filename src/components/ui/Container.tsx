import { ReactNode } from "react";

import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
  fluid?: boolean;
}

export const Container = ({
  children,
  className,
  md,
  sm,
  xs,
  fluid,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "container mx-auto px-4",
        className,
        md && "max-w-5xl",
        sm && "max-w-3xl",
        xs && "max-w-md",
        fluid && "w-full max-w-full",
      )}
    >
      {children}
    </div>
  );
};
