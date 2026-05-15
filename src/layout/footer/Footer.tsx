import React from "react";
import { S } from "./FooterStyle";
import { Contacts } from "./Contacts";
import Messengers from "./Messengers";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
      <Container>
        <S.FooterWrapper>
            <S.FooterContent>
                <S.FooterMain>
                    <S.BrandLockup>
                        <S.Logotip src="/logo.svg" alt="SARMED" />
                        <S.BrandText>
                          {t("footerTagline")}
                        </S.BrandText>
                    </S.BrandLockup>
                    <Contacts />
                </S.FooterMain>
                <S.Copyright>© 2026 IDI {t("footerCopyright")}</S.Copyright>
            </S.FooterContent>
          {/*<Messengers />*/}
        </S.FooterWrapper>
      </Container>
  );
};
