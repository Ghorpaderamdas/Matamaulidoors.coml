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

export const doorImages = {
  designer: [
    '/images/doors/designer/CD-387.png',
    '/images/doors/designer/CD-341.png',
    '/images/doors/designer/CD-342.png',
    '/images/doors/designer/CD-346.png',
    '/images/doors/designer/CD-350.png',
    '/images/doors/designer/CD-353.png',
    '/images/doors/designer/CD-355.png',
    '/images/doors/designer/CD-357.png',
    '/images/doors/designer/CD-361.png',
    '/images/doors/designer/CD-375.png',
    '/images/doors/designer/CD-381.png',
    '/images/doors/designer/CD-443.png',
  ],
  wooden: [
    '/images/doors/wooden/AD-4001.png',
    '/images/doors/wooden/AD-4017.png',
    '/images/doors/wooden/AD-4025.png',
    '/images/doors/wooden/AD-4033.png',
    '/images/doors/wooden/AD-4035.png',
    '/images/doors/wooden/AD-4037.png',
    '/images/doors/wooden/AD-4040.png',
    '/images/doors/wooden/AD-4044.png',
    '/images/doors/wooden/AD-4045.png',
    '/images/doors/wooden/AD-4047.png',
  ],
  pvc: [
    '/images/doors/pvc/AD-6153.png',
    '/images/doors/pvc/AD-6101.png',
    '/images/doors/pvc/AD-6108.png',
    '/images/doors/pvc/AD-6126.png',
    '/images/doors/pvc/AD-6127.png',
    '/images/doors/pvc/AD-6128.png',
    '/images/doors/pvc/AD-6145.png',
    '/images/doors/pvc/AD-6147.png',
    '/images/doors/pvc/AD-6149.png',
    '/images/doors/pvc/AD-6154.png',
  ],
  laminate: [
    '/images/doors/laminate/AD-4177.png',
    '/images/doors/laminate/AD-4099.png',
    '/images/doors/laminate/AD-4106.png',
    '/images/doors/laminate/AD-4121.png',
    '/images/doors/laminate/AD-4130.png',
    '/images/doors/laminate/AD-4132.png',
    '/images/doors/laminate/AD-4146.png',
    '/images/doors/laminate/AD-4311.png',
    '/images/doors/laminate/AD-4345.png',
    '/images/doors/laminate/AD-6038.png',
  ],
  flush: [
    '/images/doors/flush/AD-6151.png',
    '/images/doors/flush/AD-6175.png',
    '/images/doors/flush/AD-6181.png',
    '/images/doors/flush/AD-6182.png',
    '/images/doors/flush/CD-351.png',
    '/images/doors/flush/CD-484.png',
    '/images/doors/flush/CD-486.png',
    '/images/doors/flush/CD-487.png',
    '/images/doors/flush/CD-488.png',
    '/images/doors/flush/CD-489.png',
  ],
  interior: [
    '/images/doors/interior/AD-4090.png',
    '/images/doors/interior/AD-4005.png',
    '/images/doors/interior/AD-4008.png',
    '/images/doors/interior/AD-4011.png',
    '/images/doors/interior/AD-4026.png',
    '/images/doors/interior/AD-4036.png',
    '/images/doors/interior/AD-4040.png',
    '/images/doors/interior/AD-4048.png',
    '/images/doors/interior/AD-434.png',
    '/images/doors/interior/AD-5012.png',
  ],
  'main-entrance': [
    '/images/doors/main-entrance/AD-4935.png',
    '/images/doors/main-entrance/AD-4101.png',
    '/images/doors/main-entrance/AD-4111.png',
    '/images/doors/main-entrance/AD-4137.png',
    '/images/doors/main-entrance/AD-4142.png',
    '/images/doors/main-entrance/AD-4318.png',
    '/images/doors/main-entrance/AD-4376.png',
    '/images/doors/main-entrance/AD-4386.png',
    '/images/doors/main-entrance/AD-4659.png',
    '/images/doors/main-entrance/AD-4936.png',
    '/images/doors/main-entrance/AD-4937.png',
    '/images/doors/main-entrance/AL-4014.png',
  ],
  custom: [
    '/images/doors/custom/AD-6180.png',
    '/images/doors/custom/AD-4149.png',
    '/images/doors/custom/AD-4184.png',
    '/images/doors/custom/AD-4200.png',
    '/images/doors/custom/AD-6178.png',
    '/images/doors/custom/AD-6179.png',
    '/images/doors/custom/AD-6197.png',
    '/images/doors/custom/AD-6200.png',
    '/images/doors/custom/CD-472.png',
    '/images/doors/custom/CD-479.png',
  ],
} as const;

type DoorImageCategory = keyof typeof doorImages;

export const doorCategories: DoorCategory[] = [
  { slug: 'designer', name: 'Designer Doors', label: 'SIGNATURE CRAFT', description: 'Sculptured statements with artful detailing, crafted to become the focal point of your home.', material: 'Engineered teak & veneer', image: doorImages.designer[0] },
  { slug: 'wooden', name: 'Wooden Doors', label: 'NATURAL ELEGANCE', description: 'Solid wood doors bringing the warmth, character and enduring strength of nature indoors.', material: 'Teak & hardwood', image: doorImages.wooden[0] },
  { slug: 'pvc', name: 'PVC Doors', label: 'MODERN & DURABLE', description: 'Practical, moisture-resistant doors with a clean contemporary expression for everyday living.', material: 'Premium PVC', image: doorImages.pvc[0] },
  { slug: 'laminate', name: 'Laminate Doors', label: 'REFINED FINISH', description: 'High-pressure laminated surfaces that unite tactile luxury with effortless maintenance.', material: 'Laminated engineered core', image: doorImages.laminate[0] },
  { slug: 'flush', name: 'Flush Doors', label: 'CLEAN MINIMALISM', description: 'Quietly sophisticated, perfectly proportioned doors for modern architectural spaces.', material: 'Engineered wood', image: doorImages.flush[0] },
  { slug: 'interior', name: 'Interior Doors', label: 'EVERYDAY LUXURY', description: 'Graceful room dividers designed for privacy, acoustic comfort and beautiful daily rituals.', material: 'Solid core wood', image: doorImages.interior[0] },
  { slug: 'main-entrance', name: 'Main Entrance Doors', label: 'GRAND STATEMENT', description: 'Commanding entrance doors with impressive craftsmanship, security and lasting presence.', material: 'Solid teak & metal', image: doorImages['main-entrance'][0] },
  { slug: 'custom', name: 'Custom Doors', label: 'MADE TO ORDER', description: 'A fully personal door experience, made around your dimensions, material and vision.', material: 'Material of your choice', image: doorImages.custom[0] },
];

const woodenModels = ['MBT-01', 'MBT-11', 'MBT-12', 'MBT-13', 'MBT-14', 'MBT-16', 'NC-01', 'NC-04', 'NC-12', 'NC-14'];
const prefixes: Record<string, string> = { designer: 'DD', pvc: 'PVC', laminate: 'LAM', flush: 'FL', interior: 'INT', 'main-entrance': 'ME', custom: 'CUS' };
const names = ['Heritage Panel', 'Contour', 'Classic Frame', 'Linear Grain', 'Estate', 'Arc Detail', 'Signature', 'Horizon', 'Regal', 'Timeless'];

export const doorProducts: DoorProduct[] = doorCategories.flatMap((category) => {
  const categoryImages = doorImages[category.slug as DoorImageCategory];

  return categoryImages.map((image, index) => {
    const modelNumber = category.slug === 'wooden' ? woodenModels[index] : `${prefixes[category.slug]}-${String(index + 1).padStart(2, '0')}`;
    const name = names[index % names.length];
    const title = `${category.name.replace(' Doors', '')} ${name}`;

    return {
      id: `${category.slug}-${index + 1}`,
      slug: modelNumber.toLowerCase(),
      category: category.slug,
      modelNumber,
      title,
      description: `${name} is a considered expression of material, proportion and enduring craftsmanship.`,
      material: category.material,
      finish: index % 2 === 0 ? 'Natural matte finish' : 'Hand-finished satin',
      sizes: ['30 x 78 in', '32 x 80 in', '36 x 84 in'],
      thickness: index % 3 === 0 ? '38 mm' : '35 mm',
      thumbnail: image,
      gallery: [image, categoryImages[(index + 1) % categoryImages.length], categoryImages[(index + 2) % categoryImages.length]],
      popular: index < 3,
    };
  });
});

export function getCategory(slug: string) {
  return doorCategories.find((category) => category.slug === slug);
}

export function getCategoryProducts(category: string) {
  return doorProducts.filter((product) => product.category === category);
}

export function getProduct(category: string, product: string) {
  return doorProducts.find((item) => item.category === category && item.slug === product);
}
