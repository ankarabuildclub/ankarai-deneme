export type MenuItem = {
  name: string;
  price: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type Cafe = {
  slug: string;
  name: string;
  neighborhood: string;
  address: string;
  description: string;
  tags: string[];
  heroImage: string;
  menu: MenuSection[];
  gallery: string[];
};

export const cafes: Cafe[] = [
  {
    slug: "kavaklidere-hound-cafe",
    name: "Hound Cafe Kavaklıdere",
    neighborhood: "Çankaya · Kavaklıdere",
    address: "Tunus Cd. No:12, Çankaya",
    description:
      "Çift çekirdek seçeneği ve süt alternatifleriyle bilinen, şehrin en yoğun noktalarından birinde sakin bir köşe.",
    tags: ["Özel kahve", "Uzun masa", "Laptop dostu"],
    heroImage: "https://picsum.photos/seed/ankara-hound-cafe/1200/720",
    menu: [
      {
        title: "Espresso & filtre",
        items: [
          { name: "Espresso", price: "₺95" },
          { name: "Americano", price: "₺110" },
          { name: "V60", price: "₺140" },
          { name: "Cold brew", price: "₺160" },
        ],
      },
      {
        title: "Süt bazlı",
        items: [
          { name: "Cappuccino", price: "₺145" },
          { name: "Flat white", price: "₺155" },
          { name: "Badem sütü +₺", price: "₺35" },
        ],
      },
      {
        title: "Atıştırmalık",
        items: [
          { name: "Zeytinyağlı kurabiye", price: "₺85" },
          { name: "Çikolatalı brownie", price: "₺120" },
        ],
      },
    ],
    gallery: [
      "https://picsum.photos/seed/ankara-hc-1/900/600",
      "https://picsum.photos/seed/ankara-hc-2/900/600",
      "https://picsum.photos/seed/ankara-hc-3/900/600",
    ],
  },
  {
    slug: "bahceli-roast-house",
    name: "Roast House Bahçelievler",
    neighborhood: "Çankaya · Bahçelievler",
    address: "7. Cadde 45/A, Bahçelievler",
    description:
      "Haftalık değişen tek origin çekirdekler ve hafif kavrum profilleri. Kahvaltı tabakları da var.",
    tags: ["Tek origin", "Kahvaltı", "Terasta oturma"],
    heroImage: "https://picsum.photos/seed/ankara-roast/1200/720",
    menu: [
      {
        title: "Kahve",
        items: [
          { name: "Günün filtresi", price: "₺130" },
          { name: "Cortado", price: "₺150" },
          { name: "Mocha", price: "₺165" },
        ],
      },
      {
        title: "Kahvaltı",
        items: [
          { name: "Avokado & yumurta", price: "₺320" },
          { name: "Granola kasesi", price: "₺240" },
        ],
      },
    ],
    gallery: [
      "https://picsum.photos/seed/ankara-rh-1/900/600",
      "https://picsum.photos/seed/ankara-rh-2/900/600",
    ],
  },
  {
    slug: "cankaya-filter-bar",
    name: "Filter Bar",
    neighborhood: "Çankaya · Birlik",
    address: "Birlik Mah. 331. Sk. No:4",
    description:
      "Sadece filtre ve soğuk demleme odaklı küçük bir mekân; baristalarla çekirdek hakkında sohbet etmek kolay.",
    tags: ["Filtre kahve", "Soğuk demleme", "Butik"],
    heroImage: "https://picsum.photos/seed/ankara-filter/1200/720",
    menu: [
      {
        title: "Demleme",
        items: [
          { name: "Chemex (iki kişilik)", price: "₺220" },
          { name: "AeroPress", price: "₺150" },
          { name: "Japanese iced", price: "₺170" },
        ],
      },
      {
        title: "Çekirdek (250 g)",
        items: [
          { name: "Etiyopya Yirgacheffe", price: "₺520" },
          { name: "Kolombiya Huila", price: "₺480" },
        ],
      },
    ],
    gallery: [
      "https://picsum.photos/seed/ankara-fb-1/900/600",
      "https://picsum.photos/seed/ankara-fb-2/900/600",
      "https://picsum.photos/seed/ankara-fb-3/900/600",
      "https://picsum.photos/seed/ankara-fb-4/900/600",
    ],
  },
];

export function getCafeBySlug(slug: string): Cafe | undefined {
  return cafes.find((c) => c.slug === slug);
}

export function getAllCafes(): Cafe[] {
  return cafes;
}
