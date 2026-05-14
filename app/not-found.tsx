"use client";

import { SiteFrame } from "../src/next/SiteFrame";
import { NotFoundPage } from "../src/layout/main/NotFoundPage";

export default function NotFound() {
  return (
    <SiteFrame>
      <NotFoundPage />
    </SiteFrame>
  );
}
