"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { font, headingFont } from "../../../style/Common";
import { Theme } from "../../../style/Theme";
import { ProductFinalCtaProps } from "./types";
import { lockBodyScroll, unlockBodyScroll } from "../../../shared/lib/bodyScrollLock";

export const ProductFinalCta = ({ title, lead }: ProductFinalCtaProps) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    lockBodyScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <FinalSection>
        <FinalSectionText>
          <FinalSectionTitle>{title}</FinalSectionTitle>
          {lead ? <FinalSectionLead>{lead}</FinalSectionLead> : null}
        </FinalSectionText>
        <FinalCtaAction type="button" onClick={() => setOpen(true)}>
          {t("contactModalButton")}
        </FinalCtaAction>
      </FinalSection>

      <ContactModalOverlay type="button" $open={open} onClick={() => setOpen(false)} />
      <ContactModal $open={open} role="dialog" aria-modal="true" aria-label={t("contactModalTitle")}>
        <ContactModalClose type="button" aria-label={t("contactModalClose")} onClick={() => setOpen(false)}>
          <span />
          <span />
        </ContactModalClose>
        <ContactModalHead>
          <ContactModalTitle>{t("contactModalTitle")}</ContactModalTitle>
          <ContactModalLead>{t("contactModalLead")}</ContactModalLead>
        </ContactModalHead>
        <ContactActions>
          <ContactCard href="tel:+37491001521">
            <ContactCardIcon aria-hidden="true">
              <PhoneIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("contactModalPhoneTitle")}</ContactCardTitle>
              <ContactCardText>{t("contactModalPhoneText")}</ContactCardText>
              <ContactCardMeta>+374 91 001 521</ContactCardMeta>
            </ContactCardBody>
          </ContactCard>

          <ContactCard href="whatsapp://send?phone=+37491001521" target="_blank" rel="noreferrer">
            <ContactCardIcon aria-hidden="true">
              <MessageIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("contactModalMessageTitle")}</ContactCardTitle>
              <ContactCardText>{t("contactModalMessageText")}</ContactCardText>
            </ContactCardBody>
          </ContactCard>

          <ContactCard href="mailto:sarmed@gmail.com">
            <ContactCardIcon aria-hidden="true">
              <MailIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("contactModalEmailTitle")}</ContactCardTitle>
              <ContactCardText>{t("contactModalEmailText")}</ContactCardText>
              <ContactCardMeta>sarmed@gmail.com</ContactCardMeta>
            </ContactCardBody>
          </ContactCard>
        </ContactActions>
        <ContactModalFooter>
          <ContactModalFooterTitle>{t("contactModalFooterTitle")}</ContactModalFooterTitle>
          <ContactModalFooterText>{t("contactModalFooterText")}</ContactModalFooterText>
        </ContactModalFooter>
      </ContactModal>
    </>
  );
};

const FinalSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 22px;
  padding: 28px;
  border-radius: 28px;
  background:
    radial-gradient(circle at top left, rgba(255, 226, 238, 0.30), transparent 34%),
    radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.12), transparent 30%),
    linear-gradient(135deg, ${Theme.colors.primary800} 0%, ${Theme.colors.primary700} 42%, ${Theme.colors.primary} 100%);
  box-shadow: 0 24px 54px rgba(95, 18, 51, 0.22);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 14px;
  }
`;

const FinalSectionText = styled.div`
  display: grid;
  gap: 8px;
`;

const FinalSectionTitle = styled.h3`
  margin: 0;
  color: ${Theme.colors.white};
  ${font({ family: headingFont, weight: 700, fmax: 30, fmin: 22, color: Theme.colors.white })};
`;

const FinalSectionLead = styled.p`
  margin: 0;
  max-width: 40ch;
  color: rgba(255, 255, 255, 0.84);
  ${font({ weight: 400, fmax: 16, fmin: 14, color: Theme.colors.white })};
`;

const FinalCtaAction = styled.button`
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  padding: 0 28px;
  border-radius: ${Theme.radius.pill};
  color: ${Theme.colors.primaryDeep};
  background: rgba(255, 252, 253, 0.92);
  box-shadow: 0 18px 34px rgba(67, 4, 31, 0.18);
  transition: ${Theme.animations.transition};
  ${font({ weight: 700, fmax: 18, fmin: 15, color: Theme.colors.primaryDeep })};

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
  }
`;

const ContactModalOverlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1400;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition: ${Theme.animations.transition};
`;

const ContactModal = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1500;
  width: min(720px, calc(100vw - 32px));
  max-height: min(88vh, 920px);
  overflow: auto;
  padding: 28px;
  border-radius: 28px;
  background:
    radial-gradient(circle at top right, rgba(201, 18, 93, 0.14), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 241, 245, 0.97));
  box-shadow: 0 28px 72px rgba(67, 4, 31, 0.24);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transform: translate(-50%, ${(props) => (props.$open ? "-50%" : "-46%")});
  transition: ${Theme.animations.transition};
`;

const ContactModalClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 246, 250, 0.9);
  border: 1px solid rgba(201, 18, 93, 0.16);

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: ${Theme.colors.primaryDeep};
  }

  span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  span:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const ContactModalHead = styled.div`
  display: grid;
  gap: 10px;
`;

const ContactModalTitle = styled.h3`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 28, fmin: 22, color: Theme.colors.primaryDeep })};
`;

const ContactModalLead = styled.p`
  margin: 0;
  max-width: 46ch;
  color: ${Theme.colors.textMuted};
  ${font({ weight: 400, fmax: 17, fmin: 14, color: Theme.colors.textMuted })};
`;

const ContactActions = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 24px;
`;

const ContactCard = styled.a`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(201, 18, 93, 0.14);
  box-shadow: 0 12px 24px rgba(95, 18, 51, 0.08);
  transition: ${Theme.animations.transition};

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactCardIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  color: ${Theme.colors.primaryDeep};
  background: rgba(248, 228, 237, 0.92);
`;

const ContactCardBody = styled.div`
  display: grid;
  gap: 4px;
`;

const ContactCardTitle = styled.h4`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 20, fmin: 17, color: Theme.colors.primaryDeep })};
`;

const ContactCardText = styled.p`
  margin: 0;
  color: ${Theme.colors.textMuted};
  ${font({ weight: 400, fmax: 15, fmin: 13, color: Theme.colors.textMuted })};
`;

const ContactCardMeta = styled.strong`
  color: ${Theme.colors.primary500};
  ${font({ weight: 700, fmax: 16, fmin: 14, color: Theme.colors.primary500 })};
`;

const ContactModalFooter = styled.div`
  display: grid;
  gap: 4px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(201, 18, 93, 0.12);
`;

const ContactModalFooterTitle = styled.h4`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 18, fmin: 16, color: Theme.colors.primaryDeep })};
`;

const ContactModalFooterText = styled.p`
  margin: 0;
  color: ${Theme.colors.textMuted};
  ${font({ weight: 400, fmax: 15, fmin: 13, color: Theme.colors.textMuted })};
`;

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.11.37 2.3.56 3.57.56a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.19 2.46.56 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" fill="currentColor" />
  </svg>
);

const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8A2.5 2.5 0 0117.5 16H9l-4.5 4v-4.22A2.5 2.5 0 014 13.5v-8z" fill="currentColor" />
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11zm2.08-.5L12 10.58 17.92 6H6.08zM18 7.52l-5.39 4.17a1 1 0 01-1.22 0L6 7.52V18h12V7.52z" fill="currentColor" />
  </svg>
);
