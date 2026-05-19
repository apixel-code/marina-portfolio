import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground border-border",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-600/50 backdrop-blur-sm",
    warning: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-600/50 backdrop-blur-sm",
    outline: "bg-transparent text-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
