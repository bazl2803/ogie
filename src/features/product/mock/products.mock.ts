import type { Product } from "../schemas/product.schema";

export const newProducts: Product[] = [
  {
    id: "np-1",
    name: "Lámpara colgante 3L - GU10 770 LIGHTS",
    price: 94.95,
    image: "/421429.jpg",
    description:
      "Lámpara colgante moderna de 3 luces con acabado elegante, ideal para comedores y salas de estar.",
    category: "Iluminación",
    badge: "Nuevo",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "lampara-colgante-3l-gu10-770-lights",
  },
  {
    id: "np-2",
    name: "Lámpara colgante de vidrio negro 1L - E27 IKE-LITE",
    price: 29.95,
    image: "/427951.jpg",
    description:
      "Diseño minimalista en vidrio ahumado negro, perfecta para barras e iluminación focal.",
    category: "Iluminación",
    badge: "Nuevo",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "lampara-colgante-vidrio-negro-1l-e27-ike-lite",
  },
  {
    id: "np-3",
    name: "Lámpara colgante blanco 1L E27 IKE-LITE",
    price: 44.95,
    image: "/468504.jpg",
    description:
      "Luminaria colgante contemporánea con pantalla blanca mate de alta durabilidad.",
    category: "Iluminación",
    badge: "Nuevo",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "lampara-colgante-blanco-1l-e27-ike-lite",
  },
  {
    id: "np-4",
    name: "Panel LED Embutido Redondo 18W Luz Fría",
    price: 12.5,
    image: "/sample/ilumination.webp",
    description:
      "Panel LED ultra delgado de bajo consumo y alto rendimiento lumínico.",
    category: "Iluminación",
    badge: "Nuevo",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "panel-led-embutido-redondo-18w-luz-fria",
  },
];

export const bestSellersProducts: Product[] = [
  {
    id: "bs-1",
    name: "Interruptor Termomagnético 2x32A Riel DIN",
    price: 18.99,
    image: "/sample/breakers.webp",
    description:
      "Protección confiable contra sobrecargas y cortocircuitos en instalaciones residenciales y comerciales.",
    category: "Dados y Breakers",
    badge: "Top Ventas",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "interruptor-termomagnetico-2x32a-riel-din",
  },
  {
    id: "bs-2",
    name: "Rollo de Cable THHN Calibre 12 AWG 100m",
    price: 68.0,
    image: "/assets/categories/cables.webp",
    description:
      "Cable de cobre electrolítico de alta pureza con aislamiento termoplástico resistente al calor y humedad.",
    category: "Cables",
    badge: "Top Ventas",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "rollo-cable-thhn-calibre-12-awg-100m",
  },
  {
    id: "bs-3",
    name: "Placa Doble Interruptor + Tomacorriente Polarizado",
    price: 8.5,
    image: "/sample/plates.webp",
    description:
      "Placa decorativa moderna con mecanismo reforzado y acabado resistente a rayones.",
    category: "Plaquería",
    badge: "Top Ventas",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "placa-doble-interruptor-tomacorriente-polarizado",
  },
  {
    id: "bs-4",
    name: "Alicate Universal Aislado 1000V Profesional",
    price: 24.5,
    image: "/assets/categories/alicate.webp",
    description:
      "Herramienta ergonómica de acero cromo vanadio forjado, con certificación de aislamiento a 1000V.",
    category: "Herramientas",
    badge: "Top Ventas",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "alicate-universal-aislado-1000v-profesional",
  },
];

export const trendingProducts: Product[] = [
  {
    id: "tr-1",
    name: "Juego de Destornilladores Dieléctricos 6 Pzas",
    price: 32.0,
    image: "/sample/tools.webp",
    description:
      "Set completo de destornilladores aislados de precisión con puntas magnéticas fosfatadas.",
    category: "Herramientas",
    badge: "Tendencia",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "juego-destornilladores-dielectricos-6-pzas",
  },
  {
    id: "tr-2",
    name: "Tablero Eléctrico de Distribución 8 Circuitos",
    price: 45.0,
    image: "/sample/case.webp",
    description:
      "Gabinete metálico sobrepuesto con barra de neutro y tierra, acabado con pintura electrostática.",
    category: "Tableros",
    badge: "Tendencia",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "tablero-electrico-distribucion-8-circuitos",
  },
  {
    id: "tr-3",
    name: "Tecnoducto Corrugado Flexible 3/4 pulg 50m",
    price: 28.75,
    image: "/assets/categories/tecnoducto.webp",
    description:
      "Tubería flexible autoextinguible para canalización empotrada en paredes y losas.",
    category: "Tuberías",
    badge: "Tendencia",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "tecnoducto-corrugado-flexible-3-4-50m",
  },
  {
    id: "tr-4",
    name: "Tomacorrientes Industriales con Enchufe 3P+T",
    price: 19.99,
    image: "/sample/plugs.png",
    description:
      "Conector macho y hembra industrial IP44 de alta resistencia a impactos y temperatura.",
    category: "Terminales",
    badge: "Tendencia",
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: "tomacorrientes-industriales-enchufe-3p-t",
  },
];
