import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4.5 [&_svg]:shrink-0 cursor-pointer disabled:cursor-not-allowed relative",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-background not-disabled:hover:bg-primary/80 not-disabled:focus-visible:bg-primary/80 disabled:opacity-70 not-disabled:hover:animate-scale-up-down not-disabled:focus-visible:animate-scale-up-down",
        outline:
          "border not-disabled:hover:bg-accent not-disabled:focus-visible:bg-accent not-disabled:hover:animate-scale-up-down not-disabled:focus-visible:animate-scale-up-down disabled:bg-accent disabled:opacity-50 ",
        link: "text-foreground underline-offset-4 not-disabled:hover:underline not-disabled:focus-visible:underline disabled:text-danger disabled:underline",
        ghost:
          "bg-accent not-disabled:hover:bg-secondary not-disabled:focus-visible:bg-secondary not-disabled:hover:animate-scale-up-down not-disabled:focus-visible:animate-scale-up-down disabled:bg-secondary disabled:opacity-50",
        secondary:
          "bg-secondary border not-disabled:focus-visible:bg-accent not-disabled:hover:bg-accent not-disabled:hover:animate-scale-up-down not-disabled:focus-visible:animate-scale-up-down disabled:bg-accent disabled:opacity-70",
      },
      size: {
        default: "h-8 px-4 py-2",
        icon: "size-8",
        copy: "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
