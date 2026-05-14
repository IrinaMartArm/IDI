"use client";

import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { Languages } from "./Languages";
import { S } from "./Header_styles";
import { CatalogButton } from "../../components/catalogButton/CatalogButton";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <S.Header>
      <Container>
        <S.Bar>
          <S.Brand href="/" aria-label={t("brandHomeAria")}>
            <Logo />
          </S.Brand>

          <S.Tools>
            <CatalogButton />
            <Languages />
          </S.Tools>
        </S.Bar>
      </Container>
    </S.Header>
  );
};
