import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, KeyRound, Star } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import streetBike from "@/assets/street-bike.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroMockup } from "@/components/product/HeroMockup";
import { RouteStops } from "@/components/brand/RouteLine";
import { TRANSPORTS } from "@/components/brand/TransportIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TUMA — envie algo de um ponto para outro" },
      {
        name: "description",
        content:
          "Escolha o ponto de recolha e o destino, receba candidaturas de entregadores verificados perto de si e decida quem leva a sua encomenda.",
      },
      { property: "og:title", content: "TUMA — envie algo de um ponto para outro" },
      {
        property: "og:description",
        content:
          "Entregas por proximidade em Moçambique. Pessoas verificadas, a pé, de chapa, bicicleta, mota ou carro.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TransportBand />
        <HowItWorks />
        <Safety />
        <PeopleNearby />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 pt-12 pb-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl lg:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-3 py-1.5 text-xs font-semibold text-foreground">
            <span className="size-1.5 rounded-full bg-success" />
            Disponível em Moçambique
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.03] font-extrabold sm:text-[3.4rem]">
            Envie qualquer coisa,
            <br />
            de um ponto para outro,
            <br />
            <span className="relative inline-block">
              com pessoas verificadas.
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary" />
            </span>
          </h1>

          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            Publique o pedido, receba candidaturas de entregadores próximos e escolha
            quem leva a sua encomenda.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/app"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Solicitar entrega
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/entregador"
              className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-card px-5 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
            >
              Ser entregador
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
            {[
              { Icon: ShieldCheck, label: "Identidade verificada" },
              { Icon: Users, label: "Entregadores próximos" },
              { Icon: KeyRound, label: "Confirmação segura" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-teal" />
                <dt className="text-[13px] font-semibold text-muted-foreground">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:-mr-6">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={heroCity}
              alt="Rua movimentada em Maputo ao fim da tarde, com chapa, mota e pessoas a caminhar"
              width={1408}
              height={1600}
              className="h-[420px] w-full object-cover object-center sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-ink/35" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-[0.85] sm:scale-95 lg:-left-16 lg:translate-x-0 lg:scale-100">
            <HeroMockup />
          </div>
          <div className="h-24 lg:h-16" />
        </div>
      </div>
    </section>
  );
}

function TransportBand() {
  return (
    <section className="border-y border-border bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xs text-[15px] font-semibold text-background">
          A pé, de chapa, bicicleta, mota ou carro.
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {TRANSPORTS.map(({ key, label, Icon }) => (
            <li key={key} className="flex items-center gap-2.5 text-background/80">
              <Icon className="size-6" />
              <span className="text-sm font-semibold">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Escolha no mapa",
    body: "Defina o ponto de recolha e o destino. Ajuste o pino até ficar exacto.",
  },
  {
    n: "02",
    title: "Receba candidatos",
    body: "Entregadores próximos candidatam-se com o preço e o tempo deles.",
  },
  {
    n: "03",
    title: "Escolha com segurança",
    body: "Compare distância, transporte, avaliação e verificação antes de decidir.",
  },
  {
    n: "04",
    title: "Confirme a entrega",
    body: "Códigos na recolha e no destino garantem que a encomenda chegou a quem devia.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-[2.5rem]">
            Quatro passos,
            <br />
            do bairro ao destino.
          </h2>
          <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-card">
            <RouteStops
              compact
              from="Mercado Janet"
              fromNote="Recolha às 14:20"
              to="Polana Cimento, Rua 1301"
              toNote="Entregue às 14:52"
            />
          </div>
        </div>

        <ol className="relative">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={
                "relative border-t border-border py-8 first:border-t-0 first:pt-0 " +
                (i % 2 === 1 ? "lg:pl-16" : "")
              }
            >
              <div className="flex gap-6">
                <span className="font-display text-2xl font-extrabold text-primary/80 tabular-nums">
                  {s.n}
                </span>
                <div className="max-w-md">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const SAFETY = [
  { title: "BI verificado", body: "Documento conferido antes da primeira entrega." },
  { title: "Selfie de verificação", body: "A cara confere com o documento entregue." },
  { title: "Telefone verificado", body: "Número confirmado por código SMS." },
  { title: "Histórico de entregas", body: "Avaliações e entregas anteriores à vista." },
  { title: "Código de recolha", body: "Só entrega a encomenda com o código certo." },
  { title: "Código de entrega", body: "Quem recebe confirma no destino." },
];

function Safety() {
  return (
    <section className="bg-teal text-teal-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="eyebrow text-teal-foreground/60">Segurança</p>
          <h2 className="mt-3 max-w-lg text-3xl leading-tight sm:text-[2.5rem]">
            Sabe quem leva a sua encomenda.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-teal-foreground/75">
            Cada entregador passa por verificação antes de aparecer na sua lista. Cada
            entrega tem dois códigos e um canal para reportar problemas.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {SAFETY.map((s) => (
              <div key={s.title} className="border-t border-teal-foreground/15 pt-4">
                <dt className="flex items-center gap-2 text-sm font-bold">
                  <ShieldCheck className="size-4 text-teal-foreground/70" />
                  {s.title}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-teal-foreground/65">
                  {s.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-14">
          <div className="rounded-2xl bg-card p-5 text-foreground shadow-lift">
            <p className="eyebrow">Perfil verificado</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="size-12 rounded-xl bg-surface-sunk" />
              <div>
                <p className="text-[15px] font-extrabold">Ernesto Mabjaia</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="size-3 fill-warning text-warning" />
                  4,9 · 213 entregas
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {["BI conferido", "Selfie confere", "Telefone +258 ••• 4471"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-semibold">
                  <span className="grid size-5 place-items-center rounded-full bg-success-soft">
                    <ShieldCheck className="size-3 text-success" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-dashed border-border-strong p-4">
              <p className="text-xs text-muted-foreground">Código de recolha</p>
              <p className="mt-1 font-display text-2xl font-extrabold tracking-[0.35em] tabular-nums">
                4192
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PeopleNearby() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Entregadores</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-[2.5rem]">
            Pessoas verificadas, perto de si.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Qualquer pessoa verificada pode entregar — no bairro a pé, na cidade de
            chapa, ou de bicicleta, mota e carro. Cada entrega feita conta para o
            histórico e para a avaliação.
          </p>
          <Link
            to="/ser-entregador"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"
          >
            Quero entregar com a TUMA
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <figure className="overflow-hidden rounded-2xl">
          <img
            src={streetBike}
            alt="Mulher de bicicleta a transportar uma encomenda numa avenida costeira"
            width={1200}
            height={912}
            loading="lazy"
            className="h-[320px] w-full object-cover sm:h-[420px]"
          />
        </figure>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border bg-card paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-md text-2xl leading-tight sm:text-3xl">
          Tem algo para enviar hoje?
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/app"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Solicitar entrega
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/como-funciona"
            className="inline-flex items-center rounded-xl border border-border-strong bg-background px-5 py-3.5 text-sm font-bold"
          >
            Ver como funciona
          </Link>
        </div>
      </div>
    </section>
  );
}
