import courier1 from "@/assets/courier-1.jpg";
import courier2 from "@/assets/courier-2.jpg";
import courier3 from "@/assets/courier-3.jpg";
import type { TransportKey } from "@/components/brand/TransportIcons";

export type Candidate = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  trips: number;
  distance: string;
  eta: string;
  transport: TransportKey;
  price: string;
  verified: boolean;
  since: string;
};

export const CANDIDATES: Candidate[] = [
  {
    id: "c1",
    name: "Ernesto Mabjaia",
    photo: courier3,
    rating: 4.9,
    trips: 213,
    distance: "0,8 km",
    eta: "6 min",
    transport: "mota",
    price: "250 MT",
    verified: true,
    since: "Março 2024",
  },
  {
    id: "c2",
    name: "Aida Chirindza",
    photo: courier2,
    rating: 4.8,
    trips: 97,
    distance: "1,2 km",
    eta: "11 min",
    transport: "bicicleta",
    price: "180 MT",
    verified: true,
    since: "Julho 2024",
  },
  {
    id: "c3",
    name: "Tomás Sitoe",
    photo: courier1,
    rating: 4.7,
    trips: 41,
    distance: "1,9 km",
    eta: "18 min",
    transport: "chapa",
    price: "150 MT",
    verified: true,
    since: "Janeiro 2025",
  },
];

export const NEARBY_ORDERS = [
  {
    id: "TM-4192",
    from: "Mercado Janet",
    to: "Av. Julius Nyerere, 812",
    distance: "2,4 km",
    payout: "220 MT",
    size: "Envelope",
    posted: "há 2 min",
  },
  {
    id: "TM-4188",
    from: "Baixa, Rua da Sé",
    to: "Polana Cimento, Rua 1301",
    distance: "3,7 km",
    payout: "310 MT",
    size: "Caixa pequena",
    posted: "há 9 min",
  },
  {
    id: "TM-4181",
    from: "Farmácia Central",
    to: "Hospital Militar",
    distance: "1,1 km",
    payout: "140 MT",
    size: "Medicamentos",
    posted: "há 14 min",
  },
];

export const HISTORY = [
  {
    id: "TM-4102",
    from: "Costa do Sol",
    to: "Baixa, Rua Consiglieri",
    date: "28 Ago",
    status: "Entregue",
    price: "260 MT",
    courier: "Ernesto Mabjaia",
  },
  {
    id: "TM-4067",
    from: "Shoprite Matola",
    to: "Bairro Fomento, Q.7",
    date: "19 Ago",
    status: "Entregue",
    price: "340 MT",
    courier: "Aida Chirindza",
  },
  {
    id: "TM-3990",
    from: "Av. 24 de Julho",
    to: "Malhangalene, Rua B",
    date: "04 Ago",
    status: "Cancelado",
    price: "—",
    courier: "Tomás Sitoe",
  },
];
