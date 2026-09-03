import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function FootIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 20c-1.6 0-2.6-1.1-2.2-2.6.4-1.5 1.4-2.3 1.4-4.1 0-1.5-.7-2.3-.7-4C7.5 7 9 4 11.4 4c2 0 3.1 1.6 3.1 3.9 0 2.5-1.2 4-1.2 6 0 1.4.6 2.2.6 3.4 0 1.6-1.2 2.7-2.9 2.7Z" />
      <path d="M16.5 10.5c1.2 0 2 .9 2 2.2 0 1.6-1 2.4-1 3.6" />
    </svg>
  );
}

export function ChapaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V8.5C3 7.1 4.1 6 5.5 6h10.2c.8 0 1.6.4 2 1.1l2.6 4c.4.6.7 1.3.7 2V16" />
      <path d="M3 16h2m4 0h6m4 0h2" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M7 6v4.5H3M12 6v4.5M12 10.5h8" />
    </svg>
  );
}

export function BikeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="16.5" r="3.5" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <path d="M5.5 16.5 10 8h4l3.5 8.5M9 8h4.5M14 8l1.5-3h2" />
      <path d="M10 16.5h5" />
    </svg>
  );
}

export function MotoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="16.5" r="3.5" />
      <circle cx="19" cy="16.5" r="3.5" />
      <path d="M5 16.5h4.5l3.5-5h4" />
      <path d="M13 11.5 10.5 8H8" />
      <path d="M17 11.5c1 1.3 1.6 3 2 5" />
      <path d="M15 8h3.5" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15v-2.2c0-.4.1-.8.3-1.1L6.6 7.6c.4-.7 1.1-1.1 1.9-1.1h7c.8 0 1.5.4 1.9 1.1l2.3 4.1c.2.3.3.7.3 1.1V15" />
      <path d="M4 15h16v2.5h-2.5M4 15v2.5h2.5M9 17.5h6" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
      <path d="M6 12h12" />
    </svg>
  );
}

export type TransportKey = "pe" | "chapa" | "bicicleta" | "mota" | "carro";

export const TRANSPORTS: {
  key: TransportKey;
  label: string;
  Icon: (p: IconProps) => JSX.Element;
  note: string;
}[] = [
  { key: "pe", label: "A pé", Icon: FootIcon, note: "Entregas curtas no bairro" },
  { key: "chapa", label: "Chapa", Icon: ChapaIcon, note: "Rotas longas da cidade" },
  { key: "bicicleta", label: "Bicicleta", Icon: BikeIcon, note: "Rápido no trânsito" },
  { key: "mota", label: "Mota", Icon: MotoIcon, note: "Urgências e distância" },
  { key: "carro", label: "Carro", Icon: CarIcon, note: "Volumes maiores" },
];

export function TransportIcon({
  type,
  className,
}: {
  type: TransportKey;
  className?: string;
}) {
  const found = TRANSPORTS.find((t) => t.key === type) ?? TRANSPORTS[0];
  const Icon = found.Icon;
  return <Icon className={className} />;
}
