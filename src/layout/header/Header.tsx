"use client";

import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { S } from "./Header_styles";
import { useTranslation } from "react-i18next";
import { lockBodyScroll, unlockBodyScroll } from "../../shared/lib/bodyScrollLock";
import menuIcon from "../../images/svg/menu.svg";
import { getAssetSrc } from "../../shared/lib/getAssetSrc";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = React.useState(false);
  const items = [
    t("navProducts"),
    t("navExperts"),
    t("navPatients"),
    t("navCatalogs"),
    t("navDocumentation"),
    t("navContacts"),
  ];

  React.useEffect(() => {
    if (!open) {
      return;
    }

    lockBodyScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <S.Header>
      <Container>
        <S.Bar>
          <S.Brand href="/" aria-label={t("brandHomeAria")}>
            <Logo />
          </S.Brand>

          <S.Tools>
            <S.MenuWrap>
              <S.MenuButton
                type="button"
                aria-label={t("headerMenuAria")}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                $open={open}
              >
                <S.MenuIcon src={getAssetSrc(menuIcon)} alt="" aria-hidden="true" />
              </S.MenuButton>

              <S.MenuOverlay type="button" aria-label={t("headerMenuCloseAria")} onClick={() => setOpen(false)} $open={open} />
              <S.HeaderMenu $open={open}>
                <S.HeaderMenuHead>
                  <strong>{t("headerMenuTitle")}</strong>
                  <S.HeaderMenuClose type="button" aria-label={t("headerMenuCloseAria")} onClick={() => setOpen(false)}>
                    <span />
                    <span />
                  </S.HeaderMenuClose>
                </S.HeaderMenuHead>

                <S.HeaderMenuList>
                  {items.map((item) => (
                    <S.HeaderMenuItem key={item} type="button">
                      <strong>{item}</strong>
                      <S.HeaderMenuBadge>{t("navSoon")}</S.HeaderMenuBadge>
                    </S.HeaderMenuItem>
                  ))}
                </S.HeaderMenuList>
              </S.HeaderMenu>
            </S.MenuWrap>
          </S.Tools>
        </S.Bar>
      </Container>
    </S.Header>
  );
};
