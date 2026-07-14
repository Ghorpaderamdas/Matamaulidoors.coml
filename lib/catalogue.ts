export type DoorCategory = {
  slug: string;
  name: string;
  label: string;
  description: string;
  material: string;
  image: string;
};

export type DoorProduct = {
  id: string;
  slug: string;
  category: string;
  modelNumber: string;
  title: string;
  description: string;
  material: string;
  finish: string;
  sizes: string[];
  thickness: string;
  thumbnail: string;
  gallery: string[];
  popular: boolean;
};

export const doorCategories: DoorCategory[] = [
  { slug: 'designer', name: 'Designer Doors', label: 'SIGNATURE CRAFT', description: 'Sculptured statements with artful detailing, crafted to become the focal point of your home.', material: 'Engineered teak & veneer', image: '/images/doors/designer/door-01.svg' },
  { slug: 'wooden', name: 'Wooden Doors', label: 'NATURAL ELEGANCE', description: 'Solid wood doors bringing the warmth, character and enduring strength of nature indoors.', material: 'Teak & hardwood', image: '/images/doors/wooden/wood-door-01.svg' },
  { slug: 'pvc', name: 'PVC Doors', label: 'MODERN & DURABLE', description: 'Practical, moisture-resistant doors with a clean contemporary expression for everyday living.', material: 'Premium PVC', image: '/images/doors/pvc/gallery-02.svg' },
  { slug: 'laminate', name: 'Laminate Doors', label: 'REFINED FINISH', description: 'High-pressure laminated surfaces that unite tactile luxury with effortless maintenance.', material: 'Laminated engineered core', image: '/images/doors/laminate/gallery-03.svg' },
  { slug: 'flush', name: 'Flush Doors', label: 'CLEAN MINIMALISM', description: 'Quietly sophisticated, perfectly proportioned doors for modern architectural spaces.', material: 'Engineered wood', image: '/images/doors/flush/gallery-04.svg' },
  { slug: 'interior', name: 'Interior Doors', label: 'EVERYDAY LUXURY', description: 'Graceful room dividers designed for privacy, acoustic comfort and beautiful daily rituals.', material: 'Solid core wood', image: '/images/doors/interior/door-02.svg' },
  { slug: 'main-entrance', name: 'Main Entrance Doors', label: 'GRAND STATEMENT', description: 'Commanding entrance doors with impressive craftsmanship, security and lasting presence.', material: 'Solid teak & metal', image: '/images/doors/main-entrance/door-03.svg' },
  { slug: 'custom', name: 'Custom Doors', label: 'MADE TO ORDER', description: 'A fully personal door experience, made around your dimensions, material and vision.', material: 'Material of your choice', image: '/images/doors/custom/gallery-01.svg' },
];

const images = [
  '/images/doors/wooden/wood-door-01.svg',
  '/images/doors/wooden/wood-door-02.svg',
  '/images/doors/designer/door-01.svg',
  '/images/doors/interior/door-02.svg',
  '/images/doors/main-entrance/door-03.svg',
  '/images/doors/custom/gallery-01.svg',
  '/images/doors/pvc/gallery-02.svg',
  '/images/doors/laminate/gallery-03.svg',
  '/images/doors/flush/gallery-04.svg',
];

const woodenModels = ['MBT-01', 'MBT-11', 'MBT-12', 'MBT-13', 'MBT-14', 'MBT-16', 'NC-01', 'NC-04', 'NC-12', 'NC-14'];
const prefixes: Record<string, string> = { designer: 'DD', pvc: 'PVC', laminate: 'LAM', flush: 'FL', interior: 'INT', 'main-entrance': 'ME', custom: 'CUS' };
const names = ['Heritage Panel', 'Contour', 'Classic Frame', 'Linear Grain', 'Estate', 'Arc Detail', 'Signature', 'Horizon', 'Regal', 'Timeless'];

export const doorProducts: DoorProduct[] = doorCategories.flatMap((category, categoryIndex) =>
  Array.from({ length: 10 }, (_, index) => {
    const modelNumber = category.slug === 'wooden' ? woodenModels[index] : `${prefixes[category.slug]}-${String(index + 1).padStart(2, '0')}`;
    const imageIndex = (categoryIndex * 2 + index) % images.length;
    const title = `${category.name.replace(' Doors', '')} ${names[index]}`;
    return {
      id: `${category.slug}-${index + 1}`,
      slug: modelNumber.toLowerCase(),
      category: category.slug,
      modelNumber,
      title,
      description: `${names[index]} is a considered expression of material, proportion and enduring craftsmanship.`,
      material: category.material,
      finish: index % 2 === 0 ? 'Natural matte finish' : 'Hand-finished satin',
      sizes: ['30 × 78 in', '32 × 80 in', '36 × 84 in'],
      thickness: index % 3 === 0 ? '38 mm' : '35 mm',
      thumbnail: images[imageIndex],
      gallery: [images[imageIndex], images[(imageIndex + 1) % images.length], images[(imageIndex + 2) % images.length]],
      popular: index < 3,
    };
  }),
);

export function getCategory(slug: string) {
  return doorCategories.find((category) => category.slug === slug);
}

export function getCategoryProducts(category: string) {
  return doorProducts.filter((product) => product.category === category);
}

export function getProduct(category: string, product: string) {
  return doorProducts.find((item) => item.category === category && item.slug === product);
}
