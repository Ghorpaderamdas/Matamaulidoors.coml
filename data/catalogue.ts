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

const cloudinary = 'https://res.cloudinary.com/pnvdzj9w/image/upload';

export const doorImages = {
  designer: [
    `${cloudinary}/v1784550272/CD-387_ltc1ng.png`, `${cloudinary}/v1784550217/CD-341_gdkb6i.png`, `${cloudinary}/v1784550152/CD-342_ze2jpj.png`, `${cloudinary}/v1784550176/CD-346_ipcdtz.png`, `${cloudinary}/v1784550181/CD-350_us07tj.png`, `${cloudinary}/v1784550196/CD-353_b8ufas.png`, `${cloudinary}/v1784550249/CD-355_kzgouu.png`, `${cloudinary}/v1784550211/CD-357_dy8o5g.png`, `${cloudinary}/v1784550225/CD-361_jcaexo.png`, `${cloudinary}/v1784550218/CD-375_azemyy.png`, `${cloudinary}/v1784550231/CD-381_ct1fyn.png`, `${cloudinary}/v1784550267/CD-443_ozkm5m.png`,
  ],
  wooden: [
    `${cloudinary}/v1784550539/AD-4001_tagb3b.png`, `${cloudinary}/v1784550515/AD-4017_c4ekbx.png`, `${cloudinary}/v1784550536/AD-4025_ltgvwf.png`, `${cloudinary}/v1784550530/AD-4033_svnawa.png`, `${cloudinary}/v1784550555/AD-4035_btbtdl.png`, `${cloudinary}/v1784550561/AD-4037_gmpnye.png`, `${cloudinary}/v1784550621/AD-4040_wsfgwo.png`, `${cloudinary}/v1784550636/AD-4044_tw2by7.png`, `${cloudinary}/v1784550583/AD-4045_hwz9qi.png`, `${cloudinary}/v1784550621/AD-4047_ke86ny.png`,
  ],
  pvc: [
    `${cloudinary}/v1784550502/AD-6153_nvbytt.png`, `${cloudinary}/v1784550472/AD-6101_widsfl.png`, `${cloudinary}/v1784550477/AD-6108_umevxx.png`, `${cloudinary}/v1784550494/AD-6126_umqfq1.png`, `${cloudinary}/v1784550568/AD-6127_w3zzoo.png`, `${cloudinary}/v1784550487/AD-6128_qabkfs.png`, `${cloudinary}/v1784550493/AD-6145_ir3byi.png`, `${cloudinary}/v1784550560/AD-6147_hfixph.png`, `${cloudinary}/v1784550521/AD-6149_kn2nqs.png`, `${cloudinary}/v1784550504/AD-6154_gw8bgj.png`,
  ],
  laminate: [
    `${cloudinary}/v1784550385/AD-4177_brmedy.png`, `${cloudinary}/v1784550372/AD-4099_qrpece.png`, `${cloudinary}/v1784550375/AD-4106_mca3zb.png`, `${cloudinary}/v1784550382/AD-4121_tfwt0j.png`, `${cloudinary}/v1784550373/AD-4130_irxifo.png`, `${cloudinary}/v1784550395/AD-4132_atly4u.png`, `${cloudinary}/v1784550396/AD-4146_lnm5gf.png`, `${cloudinary}/v1784550425/AD-4311_xlpqx2.png`, `${cloudinary}/v1784550395/AD-4345_f3kgil.png`, `${cloudinary}/v1784550409/AD-6038_drckfo.png`,
  ],
  flush: [
    `${cloudinary}/v1784550280/AD-6151_ndtmlp.png`, `${cloudinary}/v1784550276/AD-6175_ydaxym.png`, `${cloudinary}/v1784550295/AD-6181_vsbpf5.png`, `${cloudinary}/v1784550358/AD-6182_iugfjm.png`, `${cloudinary}/v1784550301/CD-351_uhotcf.png`, `${cloudinary}/v1784550291/CD-484_e9vsn1.png`, `${cloudinary}/v1784550333/CD-486_aqflbh.png`, `${cloudinary}/v1784550347/CD-487_au1sjn.png`, `${cloudinary}/v1784550299/CD-488_tzv6hv.png`, `${cloudinary}/v1784550324/CD-489_v1s5vj.png`,
  ],
  interior: [
    `${cloudinary}/v1784550373/AD-4090_uhfu0p.png`, `${cloudinary}/v1784550315/AD-4005_p5ykv5.png`, `${cloudinary}/v1784550334/AD-4008_l6u6qo.png`, `${cloudinary}/v1784550339/AD-4011_mkzvzd.png`, `${cloudinary}/v1784550340/AD-4026_mmgjwe.png`, `${cloudinary}/v1784550348/AD-4036_qojvxt.png`, `${cloudinary}/v1784550348/AD-4040_yambvp.png`, `${cloudinary}/v1784550356/AD-4048_xfwirh.png`, `${cloudinary}/v1784550372/AD-434_bhbxzl.png`, `${cloudinary}/v1784550359/AD-5012_eyqmye.png`,
  ],
  'main-entrance': [
    `${cloudinary}/v1784550442/AD-4935_gwgm8r.png`, `${cloudinary}/v1784550398/AD-4101_ho4rdo.png`, `${cloudinary}/v1784550447/AD-4111_dcd9cb.png`, `${cloudinary}/v1784550419/AD-4137_dmhpnf.png`, `${cloudinary}/v1784550420/AD-4142_nhfhgc.png`, `${cloudinary}/v1784550413/AD-4318_cv7wqq.png`, `${cloudinary}/v1784550437/AD-4376_ylzt4m.png`, `${cloudinary}/v1784550435/AD-4386_uatek3.png`, `${cloudinary}/v1784550444/AD-4659_onqd4r.png`, `${cloudinary}/v1784550479/AD-4936_lf7hub.png`, `${cloudinary}/v1784550446/AD-4937_fdb9tl.png`, `${cloudinary}/v1784550485/AL-4014_nyjkn3.png`,
  ],
  custom: [
    `${cloudinary}/v1784550153/AD-6180_lutkkw.png`, `${cloudinary}/v1784550095/AD-4149_akq5uq.png`, `${cloudinary}/v1784550119/AD-4184_q1aab0.png`, `${cloudinary}/v1784550090/AD-4200_ibdmwq.png`, `${cloudinary}/v1784550083/AD-6178_lc2vi5.png`, `${cloudinary}/v1784550124/AD-6179_glb0kf.png`, `${cloudinary}/v1784550125/AD-6197_mhjmsm.png`, `${cloudinary}/v1784550167/AD-6200_hixkq0.png`, `${cloudinary}/v1784550183/CD-472_lo37eg.png`, `${cloudinary}/v1784550181/CD-479_chopby.png`,
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
    return { id: `${category.slug}-${index + 1}`, slug: modelNumber.toLowerCase(), category: category.slug, modelNumber, title, description: `${name} is a considered expression of material, proportion and enduring craftsmanship.`, material: category.material, finish: index % 2 === 0 ? 'Natural matte finish' : 'Hand-finished satin', sizes: ['30 x 78 in', '32 x 80 in', '36 x 84 in'], thickness: index % 3 === 0 ? '38 mm' : '35 mm', thumbnail: image, gallery: [image, categoryImages[(index + 1) % categoryImages.length], categoryImages[(index + 2) % categoryImages.length]], popular: index < 3 };
  });
});

export function getCategory(slug: string) { return doorCategories.find((category) => category.slug === slug); }
export function getCategoryProducts(category: string) { return doorProducts.filter((product) => product.category === category); }
export function getProduct(category: string, product: string) { return doorProducts.find((item) => item.category === category && item.slug === product); }
