import { Star, ShieldCheck } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { MapCanvas } from "./MapCanvas";
import { CANDIDATES } from "./data";
import { TransportIcon } from "@/components/brand/TransportIcons";
import { RouteStops } from "@/components/brand/RouteLine";

export function HeroMockup() {
  return (
    <PhoneFrame>
      <div className="relative">
        <MapCanvas className="h-52 w-full" couriers={4} />
        <div className="absolute inset-x-3 top-3 rounded-xl border border-border bg-card/95 p-3 shadow-card">
          <RouteStops
            compact
            from="Mercado Janet"
            fromNote="Recolha · Av. Acordos de Lusaka"
            to="Polana Cimento, Rua 1301"
            toNote="Destino · 3,7 km"
          />
        </div>
      </div>

      <div className="px-4 pb-5 pt-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[15px] font-extrabold tracking-tight">
            3 entregadores perto de si
          </h3>
          <span className="text-[11px] font-semibold text-muted-foreground">
            Pedido TM-4192
          </span>
        </div>

        <ul className="mt-3 space-y-2">
          {CANDIDATES.map((c, i) => (
            <li
              key={c.id}
              className={
                "flex items-center gap-3 rounded-xl border p-2.5 " +
                (i === 0
                  ? "border-primary/40 bg-primary/[0.04]"
                  : "border-border bg-card")
              }
            >
              <img
                src={c.photo}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                className="size-10 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="truncate text-[13px] font-bold">{c.name}</p>
                  {c.verified ? (
                    <ShieldCheck className="size-3.5 shrink-0 text-success" />
                  ) : null}
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-0.5 font-semibold text-foreground">
                    <Star className="size-3 fill-warning text-warning" />
                    {c.rating.toFixed(1)}
                  </span>
                  <span>{c.distance}</span>
                  <span className="inline-flex items-center gap-1">
                    <TransportIcon type={c.transport} className="size-3.5" />
                    {c.eta}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-bold">{c.price}</p>
                <button
                  type="button"
                  className={
                    "mt-1 rounded-lg px-2.5 py-1 text-[11px] font-bold " +
                    (i === 0
                      ? "bg-primary text-primary-foreground"
                      : "border border-border-strong text-foreground")
                  }
                >
                  Escolher
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}
