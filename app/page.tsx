"use client";

import { SiteFrame } from "../src/next/SiteFrame";
import { MainAge } from "../src/layout/main/MainAge";

export default function HomePage() {
  return (
    <SiteFrame showGoTop={false}>
      <MainAge />
    </SiteFrame>
  );
}
