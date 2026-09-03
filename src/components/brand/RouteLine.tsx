import { cn } from "@/lib/utils";

/** Horizontal route signature: ●──────● */
export function RouteLine({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="size-2 rounded-full bg-teal" />
      <span className="h-px w-10 border-t border-dashed border-border-strong" />
      <span className="size-2 rounded-full bg-primary" />
    </span>
  );
}

/** Vertical pickup → destination block used in order cards and detail views. */
export function RouteStops({
  from,
  to,
  fromNote,
  toNote,
  className,
  compact = false,
}: {
  from: string;
  to: string;
  fromNote?: string;
  toNote?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("grid grid-cols-[auto_1fr] gap-x-3", className)}>
      <div className="flex flex-col items-center pt-1.5">
        <span className="size-2.5 rounded-full bg-teal" />
        <span
          className={cn(
            "w-px flex-1 border-l border-dashed border-border-strong",
            compact ? "min-h-5" : "min-h-8",
          )}
        />
        <span className="size-2.5 rounded-full bg-primary" />
      </div>
      <div className={cn("space-y-0", compact ? "text-sm" : "")}>
        <div className={cn("pb-3", compact && "pb-2")}>
          <p className="font-semibold leading-tight text-foreground">{from}</p>
          {fromNote ? (
            <p className="text-xs text-muted-foreground">{fromNote}</p>
          ) : null}
        </div>
        <div>
          <p className="font-semibold leading-tight text-foreground">{to}</p>
          {toNote ? <p className="text-xs text-muted-foreground">{toNote}</p> : null}
        </div>
      </div>
    </div>
  );
}
