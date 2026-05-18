import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
      >
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-px w-16 bg-linear-to-r from-blue-600 to-cyan-400",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
