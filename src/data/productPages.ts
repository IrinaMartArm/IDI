type ProductPageMeta = {
  description: string;
  title: string;
};

export type ProductSlug =
  | "ID3"
  | "ID_CAM"
  | "OsteoSinus"
  | "ProstheticElements"
  | "SurgicalGuide"
  | "SurgicalKits"
  | "SurgicalSet"
  | "TurboDrill";

export const productPages: Record<ProductSlug, ProductPageMeta> = {
  ID3: {
    title: "ID3",
    description: "SARMED ID3 implant system.",
  },
  ID_CAM: {
    title: "ID CAM",
    description: "SARMED ID CAM implant system.",
  },
  OsteoSinus: {
    title: "OsteoSinus",
    description: "SARMED OsteoSinus kit.",
  },
  ProstheticElements: {
    title: "Prosthetic Elements",
    description: "SARMED prosthetic elements.",
  },
  SurgicalGuide: {
    title: "Surgical Guide",
    description: "SARMED surgical guide system.",
  },
  SurgicalKits: {
    title: "Surgical Kits",
    description: "SARMED surgical kits.",
  },
  SurgicalSet: {
    title: "Surgical Set",
    description: "SARMED surgery and prosthesis kit.",
  },
  TurboDrill: {
    title: "TurboDrill",
    description: "SARMED TurboDrill product page.",
  },
};

export const productSlugs = Object.keys(productPages) as ProductSlug[];

export function isProductSlug(slug: string): slug is ProductSlug {
  return slug in productPages;
}
