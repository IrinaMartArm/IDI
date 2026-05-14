import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "../../src/next/SiteFrame";
import { ProductPageView } from "../../src/next/ProductPageView";
import { isProductSlug, productPages, productSlugs } from "../../src/data/productPages";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  if (!isProductSlug(params.slug)) {
    return {
      title: "Product Not Found",
      description: "Requested SARMED product page was not found.",
    };
  }

  const product = productPages[params.slug];

  return {
    title: product.title,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!isProductSlug(params.slug)) {
    notFound();
  }

  return (
    <SiteFrame>
      <ProductPageView slug={params.slug} />
    </SiteFrame>
  );
}
