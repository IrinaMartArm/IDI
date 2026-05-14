"use client";

import { Id3 } from "../layout/main/catalog/products/Id3";
import { IdCam } from "../layout/main/catalog/products/IdCam";
import { OsteoSinus } from "../layout/main/catalog/products/OsteoSinus";
import { NotFoundPage } from "../layout/main/NotFoundPage";
import { ProstheticElements } from "../layout/main/catalog/products/ProstheticElements";
import { SurgicalGuide } from "../layout/main/catalog/products/SurgicalGuide";
import { SurgicalKits } from "../layout/main/catalog/products/SurgicalKits";
import { SurgicalSet } from "../layout/main/catalog/products/SurgicalSet";
import { TurboDrill } from "../layout/main/catalog/products/TurboDrill";
import { isProductSlug, ProductSlug } from "../data/productPages";

const productComponents: Record<ProductSlug, React.ComponentType> = {
  ID3: Id3,
  ID_CAM: IdCam,
  OsteoSinus: OsteoSinus,
  ProstheticElements: ProstheticElements,
  SurgicalGuide: SurgicalGuide,
  SurgicalKits: SurgicalKits,
  SurgicalSet: SurgicalSet,
  TurboDrill: TurboDrill,
};

export function ProductPageView({ slug }: { slug: string }) {
  if (!isProductSlug(slug)) {
    return <NotFoundPage />;
  }

  const Component = productComponents[slug];

  return <Component />;
}
