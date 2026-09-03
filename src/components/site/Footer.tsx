import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { RouteLine } from "@/components/brand/RouteLine";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Envie algo de um ponto para outro, com pessoas verificadas perto de si.
          </p>
          <RouteLine className="mt-4" />
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground">
            Como funciona
          </Link>
          <Link to="/ser-entregador" className="text-muted-foreground hover:text-foreground">
            Ser entregador
          </Link>
          <Link to="/app" className="text-muted-foreground hover:text-foreground">
            App do cliente
          </Link>
          <Link to="/entregador" className="text-muted-foreground hover:text-foreground">
            App do entregador
          </Link>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto w-full max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} TUMA · Maputo, Moçambique
        </p>
      </div>
    </footer>
  );
}
