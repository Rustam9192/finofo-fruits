import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  ico?: boolean;
}

const Button = ({
  children,
  className,
  primary,
  secondary,
  ico,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "items-center justify-center rounded-lg px-2.5 py-1.5 font-semibold uppercase transition-all duration-300 hover:shadow-theme-hover",
        className,
        primary && "bg-theme-prime text-white hover:bg-theme-prime/80",
        secondary && "bg-theme-light text-theme-dark hover:bg-theme-grey/50",
        disabled && "cursor-not-allowed bg-gray-400 text-gray-100",
        ico ? "inline-flex" : "flex text-sm",
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
