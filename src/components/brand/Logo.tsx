import { cn } from "@/lib/utils";

/** TUMA mark: two points joined by a travelled arc. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <path
        d="M6 22C10 9.5 22 9.5 26 22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="0.5 5"
        className="text-primary"
      />
      <circle cx="6" cy="22" r="3.4" className="fill-teal" />
      <circle cx="26" cy="22" r="3.4" className="fill-primary" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={compact ? "h-6 w-6" : "h-7 w-7"} />
      <span
        className={cn(
          "font-display font-extrabold tracking-[-0.06em] text-foreground",
          compact ? "text-lg" : "text-xl",
        )}
      >
        TUMA
      </span>
    </span>
  );
}
