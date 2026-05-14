"use client";

import * as React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Theme } from "../../style/Theme";
import { font } from "../../style/Common";
import { lockBodyScroll, unlockBodyScroll } from "../../shared/lib/bodyScrollLock";

export const Languages = () => {
  const { i18n, t } = useTranslation("common");
  const [open, setOpen] = React.useState(false);
  const options = [
    { code: "am", label: t("languageOptionAm"), shortLabel: t("languageOptionAmShort") },
    { code: "en", label: t("languageOptionEn"), shortLabel: t("languageOptionEnShort") },
    { code: "ru", label: t("languageOptionRu"), shortLabel: t("languageOptionRuShort") },
  ];
  const active = options.find((option) => option.code === i18n.resolvedLanguage) ?? options[1];

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    lockBodyScroll();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleChangeLanguage = async (code: string) => {
    await i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <>
      {open && <Overlay type="button" aria-label={t("closeLanguageSwitcherAria")} onClick={() => setOpen(false)} />}
      <Shell>
        <Trigger
          type="button"
          aria-label={t("languageSwitcherAria")}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <GlobeIcon aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5Zm6.84 8.25h-3.02a14.9 14.9 0 0 0-1.2-5.02a7.79 7.79 0 0 1 4.22 5.02ZM12 4.7c.84 1.05 1.78 3.3 2.1 6.3H9.9c.32-3 1.26-5.25 2.1-6.3Zm-3.87 1.28A14.9 14.9 0 0 0 6.93 11H3.91a7.79 7.79 0 0 1 4.22-5.02ZM3.91 13h3.02c.18 1.8.61 3.54 1.2 5.02A7.79 7.79 0 0 1 3.9 13Zm8.09 6.3c-.84-1.05-1.78-3.3-2.1-6.3h4.2c-.32 3-1.26 5.25-2.1 6.3Zm2.62-1.28c.59-1.48 1.02-3.22 1.2-5.02h3.02a7.79 7.79 0 0 1-4.22 5.02Z" />
          </GlobeIcon>
          <TriggerText>{active.shortLabel}</TriggerText>
          <Caret $open={open}>▾</Caret>
        </Trigger>
        <Popup $open={open}>
          {options.map((option) => (
            <LangButton
              key={option.code}
              type="button"
              $active={i18n.resolvedLanguage === option.code}
              onClick={() => handleChangeLanguage(option.code)}
            >
              {option.label}
            </LangButton>
          ))}
        </Popup>
      </Shell>
    </>
  );
};

const Overlay = styled.button`
  position: fixed;
  inset: 0;
  z-index: 1001;
  background: rgba(18, 52, 59, 0.18);
`;

const Shell = styled.div`
  position: relative;
  z-index: 1002;
`;

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 14px;
  border-radius: ${Theme.radius.pill};
  background: ${Theme.colors.primary50};
  border: 1px solid rgba(111, 143, 168, 0.28);
  transition: ${Theme.animations.transition};
  ${font({ weight: 700, fmax: 14, fmin: 12, color: Theme.colors.primaryDeep })};

  &:hover {
    background: ${Theme.colors.primary100};
  }
`;

const GlobeIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  fill: ${Theme.colors.primary700};
`;

const TriggerText = styled.span`
  color: ${Theme.colors.primaryDeep};
`;

const Caret = styled.span<{ $open: boolean }>`
  display: inline-flex;
  transition: ${Theme.animations.transition};
  transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
`;

const Popup = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 148px;
  display: grid;
  gap: 6px;
  padding: 8px;
  border-radius: ${Theme.radius.medium};
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(111, 143, 168, 0.16);
  box-shadow: ${Theme.shadow.medium};
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.98);
  transform-origin: top right;
  transition: ${Theme.animations.transition};

  ${(props) =>
    props.$open &&
    `
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    `}
`;

const LangButton = styled.button<{ $active: boolean }>`
  min-height: 42px;
  width: 100%;
  padding: 0 12px;
  border-radius: 14px;
  transition: ${Theme.animations.transition};
  text-align: left;
  ${font({ weight: 700, fmax: 14, fmin: 12 })};
  color: ${(props) => (props.$active ? Theme.colors.white : Theme.colors.textMuted)};
  background: ${(props) => (props.$active ? `linear-gradient(135deg, ${Theme.colors.primary700}, ${Theme.colors.primary500})` : "transparent")};

  &:hover {
    color: ${Theme.colors.white};
    background: ${Theme.colors.primary600};
  }
`;
