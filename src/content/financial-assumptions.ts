import type { Localized } from "./types";

/**
 * The "Assumptions" sheet of the Sustain five-year financial plan (EUR), copied once by hand. Amounts are kept as the
 * sheet has them (to the cent) so the sheet's own totals still add up; the page shows money in whole euros and unit
 * prices with cents. Every row holds one value per year in `years`.
 */
export const years = [2027, 2028, 2029, 2030, 2031] as const;

type Label = Localized<string>;

export interface SalesItem {
  name: Label;
  detail: Label;
  units: number[];
  /** Selling price per unit, € */
  price: number[];
  /** Direct materials, consumables and services as a share of this item's revenue (same every year). */
  materials: number;
  materialsNote: Label;
}

export const sales: SalesItem[] = [
  {
    name: { en: "Nature and tree-planting tours", pt: "Viagens de natureza e plantação de árvores" },
    detail: { en: "Serra, Gerês, Dão, Minho, Alentejo", pt: "Serra, Gerês, Dão, Minho, Alentejo" },
    units: [135, 237, 355, 444, 511],
    price: [1230.01, 1266.78, 1304.63, 1343.89, 1384.11],
    materials: 0.23,
    materialsNote: {
      en: "Farm-to-table meals, bike rental, travel insurance",
      pt: "Refeições com produtos da quinta, aluguer de bicicletas, seguro de viagem",
    },
  },
  {
    name: { en: "Slow wellness and long journeys", pt: "Bem-estar lento e viagens longas" },
    detail: { en: "Yoga, Slow Portugal", pt: "Ioga, Slow Portugal" },
    units: [55, 96, 144, 180, 207],
    price: [2082.63, 2145.96, 2207.1, 2273.31, 2342.71],
    materials: 0.25,
    materialsNote: { en: "Meals, yoga teachers, bikes, insurance", pt: "Refeições, professores de ioga, bicicletas, seguro" },
  },
  {
    name: { en: "Off-season classics", pt: "Clássicos fora de época" },
    detail: { en: "Sintra and Lisbon, Algarve", pt: "Sintra e Lisboa, Algarve" },
    units: [85, 149, 223, 279, 321],
    price: [1340.89, 1381.35, 1422.47, 1465.56, 1509.25],
    materials: 0.22,
    materialsNote: { en: "Meals, bike rental, travel insurance", pt: "Refeições, aluguer de bicicletas, seguro de viagem" },
  },
  {
    name: { en: "Picnics", pt: "Piqueniques" },
    detail: { en: "Add-on and stand-alone baskets", pt: "Cestos extra ou avulsos" },
    units: [310, 617, 961, 1202, 1420],
    price: [30.48, 31.46, 32.63, 33.62, 34.55],
    materials: 0.49,
    materialsNote: { en: "Farm food, baskets and packaging for picnics", pt: "Comida da quinta, cestos e embalagens para piqueniques" },
  },
  {
    name: { en: "Local products and souvenirs", pt: "Produtos locais e lembranças" },
    detail: { en: "Farm boxes, crafts", pt: "Cabazes da quinta, artesanato" },
    units: [384, 810, 1350, 1713, 2035],
    price: [29.64, 31.35, 32.9, 33.88, 34.97],
    materials: 0.55,
    materialsNote: { en: "Craft souvenirs, farmers' products, packaging", pt: "Lembranças artesanais, produtos de agricultores, embalagens" },
  },
  {
    name: { en: "Seasonal events", pt: "Eventos sazonais" },
    detail: { en: "Village cinema: tickets, food and drink, sponsors", pt: "Cinema na aldeia: bilhetes, comida e bebida, patrocínios" },
    units: [400, 720, 1120, 1350, 1500],
    price: [19, 19.33, 22.57, 22.33, 22.67],
    materials: 0.16,
    materialsNote: { en: "Food and drinks from local producers sold at events", pt: "Comida e bebidas de produtores locais vendidas nos eventos" },
  },
];

/** The first three sales items are the multi-day tours. */
export const tourCount = 3;

export const otherDirectExpenses: { label: Label; relatedTo: Label; values: number[] }[] = [
  {
    label: { en: "Freelance local guides and experiences", pt: "Guias locais independentes e experiências" },
    relatedTo: { en: "Tour packages", pt: "Pacotes de viagem" },
    values: [50710, 91523.74, 141159.11, 181862.55, 215521.43],
  },
  {
    label: { en: "Electric and airport transfers", pt: "Transfers elétricos e do aeroporto" },
    relatedTo: { en: "Tour packages", pt: "Pacotes de viagem" },
    values: [34050, 61460.1, 94802.02, 122134.1, 144740.43],
  },
  {
    label: { en: "Tree seedlings from the partner nursery", pt: "Árvores jovens do viveiro parceiro" },
    relatedTo: { en: "Tree-planting tours", pt: "Viagens de plantação" },
    values: [2400, 4346.6, 6704.89, 8632.54, 10242.13],
  },
  {
    label: { en: "Event licences, permits and setup", pt: "Licenças, autorizações e montagem de eventos" },
    relatedTo: { en: "Seasonal events", pt: "Eventos sazonais" },
    values: [2800, 4200, 6000, 6975, 8000],
  },
  {
    label: { en: "Picnic transport to hidden-gem spots", pt: "Transporte de piqueniques para recantos escondidos" },
    relatedTo: { en: "Picnics", pt: "Piqueniques" },
    values: [620, 1270.81, 2039.05, 2625.82, 3195.32],
  },
];

export interface Role {
  label: Label;
  headcount: number[];
  /** Yearly gross salary (14 months), € */
  gross: number;
  /** Other personnel costs per year, € */
  other: number;
  /** Yearly net salary, € */
  net: number;
}

export const staffing: { group: Label; roles: Role[] }[] = [
  {
    group: { en: "Direct labour", pt: "Mão de obra direta" },
    roles: [
      {
        label: { en: "Tour operators and tour leaders", pt: "Operadores e acompanhantes turísticos" },
        headcount: [1, 2, 3, 3, 4],
        gross: 18200,
        other: 2294,
        net: 13468,
      },
      {
        label: { en: "Operations and supplier manager (founder)", pt: "Gestor de operações e fornecedores (fundador)" },
        headcount: [1, 1, 1, 1, 1],
        gross: 19600,
        other: 2308,
        net: 14504,
      },
    ],
  },
  {
    group: { en: "Marketing and sales", pt: "Marketing e vendas" },
    roles: [{ label: { en: "Marketing expert", pt: "Especialista em marketing" }, headcount: [1, 1, 1, 1, 1], gross: 22400, other: 2336, net: 16576 }],
  },
  {
    group: { en: "General and administrative", pt: "Gestão e administração" },
    roles: [
      { label: { en: "General manager (founder)", pt: "Diretor-geral (fundador)" }, headcount: [1, 1, 1, 1, 1], gross: 19600, other: 2308, net: 14504 },
      {
        label: { en: "IT worker: web and app developer", pt: "Técnico de informática: programador web e de aplicações" },
        headcount: [1, 1, 1, 1, 1],
        gross: 25200,
        other: 2364,
        net: 18648,
      },
      {
        label: { en: "Booking and customer care agent", pt: "Assistente de reservas e apoio ao cliente" },
        headcount: [0, 1, 1, 2, 2],
        gross: 14700,
        other: 2259,
        net: 10878,
      },
      { label: { en: "Office and admin assistant", pt: "Assistente administrativo" }, headcount: [0, 0, 0, 1, 1], gross: 13300, other: 2245, net: 9842 },
    ],
  },
];

export const payrollRates = { employerSocialSecurity: 0.2375, employeeSocialSecurity: 0.11, incomeTax: 0.15 };

export const operatingExpenses: { label: Label; values: number[] }[] = [
  { label: { en: "Marketing services", pt: "Serviços de marketing" }, values: [26500, 22000, 26000, 28000, 30000] },
  { label: { en: "Utilities", pt: "Água, eletricidade e gás" }, values: [0, 0, 1200, 1300, 1400] },
  { label: { en: "Office rent", pt: "Renda do escritório" }, values: [3600, 3600, 10800, 11100, 11400] },
  { label: { en: "Cleaning and maintenance", pt: "Limpeza e manutenção" }, values: [0, 0, 900, 950, 1000] },
  { label: { en: "Office supplies", pt: "Material de escritório" }, values: [3000, 4000, 5000, 5500, 6000] },
  { label: { en: "Communications", pt: "Comunicações" }, values: [960, 1200, 1500, 1600, 1700] },
  { label: { en: "Legal services", pt: "Serviços jurídicos" }, values: [5189.67, 500, 600, 600, 650] },
  { label: { en: "Financial advisory", pt: "Consultoria financeira" }, values: [3600, 3708, 3819, 3934, 4052] },
  { label: { en: "IT consultant", pt: "Consultor de informática" }, values: [3000, 3900, 4800, 5200, 5600] },
  { label: { en: "Insurance", pt: "Seguros" }, values: [1500, 1800, 2200, 2400, 2600] },
  { label: { en: "Security", pt: "Segurança" }, values: [0, 0, 300, 300, 300] },
  { label: { en: "Other general expenses", pt: "Outras despesas gerais" }, values: [17294.22, 23308.38, 33013.65, 39912.12, 45896.77] },
];

/** Every sales item is collected in full at booking; these are the supplier terms. */
export const payables: { label: Label; immediate: number; days: number }[] = [
  { label: { en: "Direct materials", pt: "Materiais diretos" }, immediate: 0.5, days: 30 },
  { label: { en: "Subcontractors and other suppliers", pt: "Subcontratados e outros fornecedores" }, immediate: 0.3, days: 30 },
  { label: { en: "All other suppliers", pt: "Restantes fornecedores" }, immediate: 1, days: 0 },
];

export const capex: { label: Label; value: number; year: number; life: number }[] = [
  { label: { en: "Picnic and tree-planting equipment", pt: "Equipamento de piquenique e plantação" }, value: 2000, year: 2027, life: 5 },
  { label: { en: "Office furniture and equipment", pt: "Mobiliário e equipamento de escritório" }, value: 3000, year: 2029, life: 8 },
  { label: { en: "Computers and phones (start-up team)", pt: "Computadores e telemóveis (equipa inicial)" }, value: 4500, year: 2027, life: 3 },
  { label: { en: "Website and booking app development", pt: "Desenvolvimento do site e da app de reservas" }, value: 6000, year: 2027, life: 3 },
  { label: { en: "Outdoor cinema projector, screen and sound", pt: "Projetor, ecrã e som para cinema ao ar livre" }, value: 3500, year: 2027, life: 5 },
  { label: { en: "Computers for new staff", pt: "Computadores para novos colaboradores" }, value: 2400, year: 2028, life: 3 },
  { label: { en: "Computer replacement", pt: "Substituição de computadores" }, value: 5000, year: 2030, life: 3 },
];

export const financing = {
  shareCapital: 30000,
  loan: { principal: 130000, rate: 0.065, years: 7, instalment: 23703.08 },
};

export const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
/** Column totals of rows that each hold one value per year. */
export const yearTotals = (rows: number[][]) => years.map((_, i) => sum(rows.map((r) => r[i])));
