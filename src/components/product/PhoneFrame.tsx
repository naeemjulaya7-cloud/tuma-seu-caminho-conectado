import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  time = "09:41",
}: {
  children: ReactNode;
  className?: string;
  time?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[320px] shrink-0 rounded-[2rem] border border-border-strong/60 bg-ink p-2 shadow-device",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-card">
        <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-foreground">
          <span>{time}</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3.5 rounded-[2px] bg-foreground/70" />
            <span className="h-2 w-2 rounded-[2px] bg-foreground/40" />
            <span className="h-2.5 w-5 rounded-[3px] border border-foreground/50" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
