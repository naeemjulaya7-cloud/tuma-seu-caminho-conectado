import { cn } from "@/lib/utils";

/**
 * Stylised city map used inside the product screens.
 * Not a real map provider — a calm, readable stand-in with the TUMA route
 * signature (pickup ● ── destination ●) drawn on top.
 */
export function MapCanvas({
  className,
  showRoute = true,
  couriers = 0,
  progress,
  label,
}: {
  className?: string;
  showRoute?: boolean;
  couriers?: number;
  progress?: number;
  label?: string;
}) {
  const courierDots = [
    { x: 62, y: 58 },
    { x: 128, y: 42 },
    { x: 200, y: 96 },
    { x: 96, y: 140 },
    { x: 232, y: 158 },
  ].slice(0, couriers);

  return (
    <div className={cn("relative overflow-hidden bg-surface-sunk", className)}>
      <svg viewBox="0 0 300 200" className="h-full w-full" role="img" aria-label="Mapa da rota">
        <rect width="300" height="200" className="fill-surface-sunk" />
        {/* water */}
        <path d="M0 168 C60 158 110 178 168 172 C220 167 260 180 300 174 L300 200 L0 200Z" className="fill-teal/15" />
        {/* blocks */}
        {[
          [18, 22, 54, 34],
          [86, 16, 62, 28],
          [166, 26, 48, 42],
          [226, 18, 56, 30],
          [20, 74, 46, 42],
          [82, 62, 40, 30],
          [140, 82, 58, 34],
          [216, 74, 62, 38],
          [30, 128, 62, 26],
          [112, 124, 52, 30],
          [188, 128, 44, 24],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="2"
            className="fill-foreground/[0.05]"
          />
        ))}
        {/* roads */}
        <g className="stroke-background" strokeWidth="6" strokeLinecap="round">
          <path d="M0 60 H300" />
          <path d="M0 120 H300" />
          <path d="M76 0 V200" />
          <path d="M208 0 V200" />
          <path d="M150 0 L176 200" />
        </g>
        {showRoute ? (
          <>
            <path
              id="tuma-route"
              d="M54 150 C90 120 100 84 148 72 C196 60 214 58 246 44"
              className="stroke-foreground/15"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M54 150 C90 120 100 84 148 72 C196 60 214 58 246 44"
              className="stroke-primary"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={progress !== undefined ? "300" : undefined}
              strokeDashoffset={
                progress !== undefined ? 300 - (progress / 100) * 300 : undefined
              }
              fill="none"
            />
            <circle cx="54" cy="150" r="9" className="fill-background" />
            <circle cx="54" cy="150" r="5" className="fill-teal" />
            <circle cx="246" cy="44" r="9" className="fill-background" />
            <circle cx="246" cy="44" r="5" className="fill-primary" />
          </>
        ) : null}
        {courierDots.map((d, i) => (
          <g key={i}>
            <circle cx={d.x} cy={d.y} r="8" className="fill-teal/15" />
            <circle cx={d.x} cy={d.y} r="3.2" className="fill-teal" />
          </g>
        ))}
      </svg>
      {label ? (
        <span className="absolute bottom-2 left-2 rounded-md bg-card/90 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
          {label}
        </span>
      ) : null}
    </div>
  );
}
