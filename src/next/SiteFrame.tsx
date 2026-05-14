"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "../layout/footer/Footer";
import { Header } from "../layout/header/Header";
import { GoTop } from "../components/goTop/GoTop";
import { productCards } from "../data/products";

export function SiteFrame({
  children,
  showGoTop = true,
}: {
  children: ReactNode;
  showGoTop?: boolean;
}) {
  const pathname = usePathname();
  const isProductPage = productCards.some((product) => pathname === product.path);

  return (
    <>
      <Header />
      {children}
      {showGoTop && <GoTop />}
      {!isProductPage && <Footer />}
    </>
  );
}
