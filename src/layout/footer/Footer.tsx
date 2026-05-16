import React from "react";
import { S } from "./FooterStyle";
import { Contacts } from "./Contacts";
import { Container } from "../../components/Container";
import { useTranslation } from "react-i18next";
import medSistemaLogo from "../../images/svg/med-sistema.svg";
import { getAssetSrc } from "../../shared/lib/getAssetSrc";

export const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
      <Container>
        <S.FooterWrapper>
            <S.FooterContent>
                <S.FooterMain>
                    <S.BrandLockup>
                        <S.Logotip src={getAssetSrc(medSistemaLogo)} alt="Медсистема" />
                        <S.BrandText>
                          {t("footerRepresentative")}
                        </S.BrandText>
                    </S.BrandLockup>
                    <Contacts />
                </S.FooterMain>
                <S.Copyright>© 2026 IDI {t("footerCopyright")}</S.Copyright>
            </S.FooterContent>
        </S.FooterWrapper>
      </Container>
  );
};
