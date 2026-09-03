import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/ser-entregador", label: "Ser entregador" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-[2px]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link to="/" className="shrink-0" aria-label="TUMA — início">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/entrar"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Entrar
          </Link>
          <Link
            to="/criar-conta"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-ink/90"
          >
            Criar conta
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-card px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                to="/entrar"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-border-strong px-3 py-2.5 text-center text-sm font-semibold"
              >
                Entrar
              </Link>
              <Link
                to="/criar-conta"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-ink px-3 py-2.5 text-center text-sm font-semibold text-background"
              >
                Criar conta
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
