"use client";

import "../src/config/i18n";
import { ReactNode, useEffect } from "react";
import { GlobalStyle } from "../src/style/GlobalStyle";
import { StyledComponentsRegistry } from "./styled-components-registry";
import i18n from "../src/config/i18n";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const applyLanguage = (language?: string) => {
      document.documentElement.lang = language || "en";
    };

    applyLanguage(i18n.resolvedLanguage);
    i18n.on("languageChanged", applyLanguage);

    return () => {
      i18n.off("languageChanged", applyLanguage);
    };
  }, []);

  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
}
