"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { headingFont, font } from "../../style/Common";
import { Theme } from "../../style/Theme";
import { useTranslation } from "react-i18next";
import creativeFabrica2 from "../../images/pictures/main/hero.png";
import { getAssetSrc } from "../../shared/lib/getAssetSrc";
import { lockBodyScroll, unlockBodyScroll } from "../../shared/lib/bodyScrollLock";

const points = ["heroPoint1", "heroPoint2", "heroPoint3"];
const flowSteps = [
  { title: "heroFlow1Title", text: "heroFlow1Text" },
  { title: "heroFlow2Title", text: "heroFlow2Text" },
  { title: "heroFlow3Title", text: "heroFlow3Text" },
  { title: "heroFlow4Title", text: "heroFlow4Text" },
];

export const Hero = () => {
  const { t } = useTranslation("home");
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
      <HeroSection>
        <Container>
          <Shell>
            <Content>
              <Heading>{t("heroTitle")}</Heading>
              <Lead>{t("heroText")}</Lead>
              <Actions>
                <PrimaryLink href="/#catalog">{t("heroPrimaryCta")}</PrimaryLink>
                <SecondaryButton type="button" onClick={() => setOpen(true)}>
                  {t("heroSecondaryCta")}
                </SecondaryButton>
              </Actions>
              <Points>
                {points.map((point) => (
                  <Point key={point}>{t(point)}</Point>
                ))}
              </Points>
            </Content>
            <Aside>
              <AsideBackground src={getAssetSrc(creativeFabrica2)} alt="" aria-hidden="true" />
              <ClinicalTop>
                <ClinicalEyebrow>{t("heroClinicalEyebrow")}</ClinicalEyebrow>
                <ClinicalTitle>{t("heroClinicalTitle")}</ClinicalTitle>
                <ClinicalDesc>{t("heroClinicalText")}</ClinicalDesc>
              </ClinicalTop>
              <ClinicalVisual>
                <VerticalFlow>
                  <FlowAxis aria-hidden="true" />
                  {flowSteps.map((step, index) => (
                    <VerticalFlowStep key={step.title}>
                      <FlowStep $index={index}>
                        <FlowDotSlot aria-hidden="true">
                          <FlowDot
                            $index={index}
                            $variant={
                              index === 0 ? "start" : index === flowSteps.length - 1 ? "end" : "middle"
                            }
                          />
                        </FlowDotSlot>
                        <FlowContent $index={index}>
                          <strong>{t(step.title)}</strong>
                          <small>{t(step.text)}</small>
                        </FlowContent>
                      </FlowStep>
                    </VerticalFlowStep>
                  ))}
                </VerticalFlow>
                <FlowLabel>{t("heroFlowLabel")}</FlowLabel>
              </ClinicalVisual>
            </Aside>
          </Shell>
        </Container>
      </HeroSection>

      <ContactModalOverlay type="button" $open={open} onClick={() => setOpen(false)} />
      <ContactModal $open={open} role="dialog" aria-modal="true" aria-label={t("heroContactModalTitle")}>
        <ContactModalClose type="button" aria-label={t("heroContactModalClose")} onClick={() => setOpen(false)}>
          <span />
          <span />
        </ContactModalClose>
        <ContactModalHead>
          <ContactModalTitle>{t("heroContactModalTitle")}</ContactModalTitle>
          <ContactModalLead>{t("heroContactModalLead")}</ContactModalLead>
        </ContactModalHead>
        <ContactActions>
          <ContactCard href="mailto:info@med-systema.ru">
            <ContactCardIcon aria-hidden="true">
              <MailIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("heroContactEmailTitle")}</ContactCardTitle>
              <ContactCardText>{t("heroContactEmailText")}</ContactCardText>
              <ContactCardMeta>info@med-systema.ru</ContactCardMeta>
            </ContactCardBody>
          </ContactCard>

          <ContactCard href="tel:+79183661754">
            <ContactCardIcon aria-hidden="true">
              <PhoneIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("heroContactPhoneTitle")}</ContactCardTitle>
              <ContactCardText>{t("heroContactPhoneText")}</ContactCardText>
              <ContactCardMeta>+7 918 366-17-54</ContactCardMeta>
            </ContactCardBody>
          </ContactCard>

          <ContactCard href="tel:+79384779500">
            <ContactCardIcon aria-hidden="true">
              <PhoneIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("heroContactPhoneSecondaryTitle")}</ContactCardTitle>
              <ContactCardText>{t("heroContactPhoneSecondaryText")}</ContactCardText>
              <ContactCardMeta>+7 938 477-95-00</ContactCardMeta>
            </ContactCardBody>
          </ContactCard>

          <ContactCard as="div">
            <ContactCardIcon aria-hidden="true">
              <LocationIcon />
            </ContactCardIcon>
            <ContactCardBody>
              <ContactCardTitle>{t("heroContactAddressTitle")}</ContactCardTitle>
              <ContactCardText>{t("heroContactAddressText")}</ContactCardText>
              <ContactCardMeta>
                Краснодарский край, г. Краснодар, ул. Уральская, д. 71, к. 1, помещение123/1
              </ContactCardMeta>
            </ContactCardBody>
          </ContactCard>
        </ContactActions>
      </ContactModal>
    </>
  );
};

const HeroSection = styled.section`
  padding-top: 30px;
`;

const Shell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(300px, 0.9fr);
  gap: 28px;
  align-items: stretch;

  @media ${Theme.media.break} {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${Theme.radius.large};
  padding: 40px;
  background: radial-gradient(circle at top right, rgba(255, 240, 246, 0.18), transparent 30%),
  radial-gradient(circle at bottom left, rgba(253, 231, 240, 0.18), transparent 34%),
  linear-gradient(145deg, ${Theme.colors.primary800}, ${Theme.colors.primary500});
  box-shadow: ${Theme.shadow.medium};

  &::after {
    content: "";
    position: absolute;
    inset: auto -80px -120px auto;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(255, 231, 241, 0.26), transparent 70%);
  }

  @media ${Theme.media.mobile} {
    padding: 28px 20px;
  }
`;

const Heading = styled.h1`
  max-width: 12ch;
  color: ${Theme.colors.white};
  font-family: ${headingFont};
  letter-spacing: 0.02em;
  ${font({ family: headingFont, weight: 700, fmax: 68, fmin: 38, color: Theme.colors.white })};
`;

const Lead = styled.p`
  max-width: 62ch;
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.84);
  ${font({ weight: 400, fmax: 21, fmin: 16, color: Theme.colors.white })};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
`;

const ActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border-radius: ${Theme.radius.pill};
  transition: ${Theme.animations.transition};
  ${font({ weight: 600, fmax: 18, fmin: 15 })};

  &:hover {
    transform: translateY(-1px);
  }
`;

const PrimaryLink = styled(ActionLink)`
  color: ${Theme.colors.white};
  //background: linear-gradient(135deg, ${Theme.colors.primary600}, ${Theme.colors.primary});
  background: linear-gradient(180deg, rgba(255, 248, 251, 0.98), rgba(246, 228, 237, 0.92));
  box-shadow: 0 16px 32px rgba(95, 18, 51, 0.22);
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border-radius: ${Theme.radius.pill};
  transition: ${Theme.animations.transition};
  color: ${Theme.colors.white};
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.42);

  ${font({ weight: 600, fmax: 18, fmin: 15, color: Theme.colors.white })};

  &:hover {
    transform: translateY(-1px);
  }
`;

const Points = styled.ul`
  display: grid;
  gap: 12px;
  margin-top: 26px;
`;

const Point = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.88);
  ${font({ weight: 500, fmax: 18, fmin: 14, color: Theme.colors.white })};

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    flex: 0 0 10px;
    border-radius: 50%;
    background: ${Theme.colors.primary100};
    box-shadow: 0 0 0 6px rgba(255, 233, 242, 0.16);
  }
`;

const Aside = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 18px;
  padding: 20px;
  border-radius: ${Theme.radius.large};
  overflow: hidden;
  border: 0.5px solid ${Theme.colors.background};
  box-shadow: ${Theme.shadow.medium};
  background:
  radial-gradient(circle at top right,rgba(201,18,93,0.13),transparent 75%),
  linear-gradient(180deg,rgba(255,252,253,0.98),rgba(246,233,239,0.94) 100%);
  
    //radial-gradient(circle at top right, rgba(201, 18, 93, 0.10), transparent 32%),
    //linear-gradient(180deg, rgba(255, 252, 253, 0.98), rgba(246, 233, 239, 0.94) 100%);

  @media ${Theme.media.mobile} {
    padding: 16px;
  }
`;

const AsideBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 85%;
  object-fit: cover;
  object-position: center;
  bottom: -1px;

  @media ${Theme.media.break} {
    max-width: 500px;
    right: -20px;
  }
`;

const ClinicalTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 18px 15px 0;
  border-radius: 22px;
  z-index: 3;
  height: fit-content;
`;

const ClinicalEyebrow = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${Theme.colors.primary500};
  text-transform: uppercase;
`;

const ClinicalTitle = styled.h2`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  font-family: ${headingFont};
  line-height: 1.05;
  ${font({ family: headingFont, weight: 700, fmax: 34, fmin: 26, color: Theme.colors.primaryDeep })};
`;

const ClinicalDesc = styled.p`
  margin: 0;
  max-width: 34ch;
  line-height: 1.65;
  color: rgba(86, 16, 45, 0.72);
  ${font({ weight: 500, fmax: 16, fmin: 14, color: Theme.colors.text })};
`;

const ClinicalVisual = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 46px;
  flex: 1 1 auto;
  min-height: 100%;
  margin-top: 20px;
  overflow: hidden;
  padding: 24px;

  @media ${Theme.media.mobile} {
    min-height: 320px;
    padding: 18px;
  }
`;

const VerticalFlow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: 100%;
  max-width: 150px;
  min-height: 450px;
  max-height: 650px;
  margin-top: 20px;
`;

const VerticalFlowStep = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const FlowStep = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  min-height: 56px;
  animation: heroFlowStep 8s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * 2}s;

  @keyframes heroFlowStep {
    0%, 18%, 100% {
      opacity: 0.62;
      transform: translateX(0);
    }

    8%, 14% {
      opacity: 1;
      transform: translateX(4px);
    }
  }
`;

const FlowDotSlot = styled.div`
  width: 24px;
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
`;

const FlowContent = styled.div<{ $index: number }>`
  display: grid;
  gap: 4px;
  text-align: left;
  animation: heroFlowContent 8s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * 2}s;

  strong {
    font-size: 16px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: ${Theme.colors.textSecondary};
    transition: color ${Theme.animations.transition};
  }

  small {
    font-size: 14px;
    line-height: 1.35;
    font-weight: 500;
    color: ${Theme.colors.textMuted};
    transition: color ${Theme.animations.transition};
  }

  @keyframes heroFlowContent {
    0%, 18%, 100% {
      opacity: 0.72;
    }

    8%, 14% {
      opacity: 1;
    }
  }

  @keyframes heroFlowTextStrong {
    0%, 18%, 100% {
      color: ${Theme.colors.textSecondary};
    }

    8%, 14% {
      color: ${Theme.colors.primaryDeep};
    }
  }

  @keyframes heroFlowTextSmall {
    0%, 18%, 100% {
      color: ${Theme.colors.textMuted};
    }

    8%, 14% {
      color: rgba(86, 16, 45, 0.88);
    }
  }

  strong {
    animation: heroFlowTextStrong 8s ease-in-out infinite;
    animation-delay: ${(props) => props.$index * 2}s;
  }

  small {
    animation: heroFlowTextSmall 8s ease-in-out infinite;
    animation-delay: ${(props) => props.$index * 2}s;
  }
`;

const FlowDot = styled.div<{ $index: number; $variant: "start" | "middle" | "end" }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f7e4ec 0%, #ecc6d7 100%);
  border: 1px solid rgba(173, 14, 79, 0.30);
  box-shadow: 0 2px 20px rgba(95, 18, 51, 0.14), 0 6px 18px rgba(255, 255, 255, 0.18);
  filter: drop-shadow(0 10px 14px rgba(95, 18, 51, 0.16));
  animation: heroFlowDot 8s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * 2}s;

  &::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    background: ${Theme.colors.primary600};
    display: block;
    transform: scale(1);
    transform-origin: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 9px;
    border-right: 2px solid ${Theme.colors.primary700};
    border-bottom: 2px solid ${Theme.colors.primary700};
    opacity: 0;
    transform: translate(-50%, -52%) rotate(45deg) scale(0.72);
    pointer-events: none;
  }

  @keyframes heroFlowDot {
    0%, 18%, 100% {
      transform: scale(1);
      background: linear-gradient(180deg, #f7e4ec 0%, #ecc6d7 100%);
      border-color: rgba(173, 14, 79, 0.30);
      box-shadow: 0 2px 20px rgba(95, 18, 51, 0.14), 0 6px 18px rgba(255, 255, 255, 0.18);
      filter: drop-shadow(0 10px 14px rgba(95, 18, 51, 0.16));
    }

    8%, 14% {
      transform: scale(${(props) => (props.$variant === "end" ? 1.02 : 1.01)});
      background: ${Theme.colors.white};
      border-color: rgba(201, 18, 93, 0.72);
      box-shadow:
        0 0 1px 2px rgba(201, 18, 93, 0.78),
        0 0 1px 5px rgba(255, 255, 255, 0.92),
        0 0 3px 6px rgba(201, 18, 93, 0.68),
        0 0 1px 7px rgba(255, 255, 255, 0.95),
        0 0 10px 7px rgba(201, 18, 93, 0.52),
        0 0 3px 12px rgba(255, 255, 255, 0.9);
      filter: drop-shadow(0 12px 16px rgba(95, 18, 51, 0.18));
    }
  }

  @keyframes heroFlowDotCore {
    0%, 18%, 100% {
      background: ${Theme.colors.primary600};
      opacity: 1;
      transform: scale(1);
    }

    8%, 14% {
      background: ${Theme.colors.primary500};
      transform: scale(0.72);
    }
  }

  @keyframes heroFlowDotCoreEnd {
    0%, 18%, 100% {
      background: ${Theme.colors.primary600};
      opacity: 1;
      transform: scale(1);
    }

    8%, 14% {
      background: ${Theme.colors.primary500};
      opacity: 0;
      transform: scale(0.72);
    }
  }

  @keyframes heroFlowDotCheck {
    0%, 18%, 100% {
      opacity: 0;
      transform: translate(-50%, -48%) rotate(45deg) scale(0.5);
    }

    8%, 14% {
      opacity: 1;
      transform: translate(-50%, -56%) rotate(45deg) scale(0.92);
    }
  }

  &::before {
    animation: ${(props) =>
      props.$variant === "end"
        ? "heroFlowDotCoreEnd 8s cubic-bezier(0.4, 0, 0.2, 1) infinite"
        : "heroFlowDotCore 8s cubic-bezier(0.4, 0, 0.2, 1) infinite"};
    animation-delay: ${(props) => `${props.$index * 2}s`};
  }

  &::after {
    animation: ${(props) => (props.$variant === "end" ? "heroFlowDotCheck 8s cubic-bezier(0.4, 0, 0.2, 1) infinite" : "none")};
    animation-delay: ${(props) => (props.$variant === "end" ? `${props.$index * 2}s` : "0s")};
  }
`;

const FlowAxis = styled.div`
  position: absolute;
  top: 28px;
  bottom: 80px;
  left: 11px;
  width: 2px;
  background: linear-gradient(180deg, rgba(201, 18, 93, 0.28), rgba(173, 14, 79, 0.52));
`;

const FlowLabel = styled.div`
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 248, 251, 0.78);
  border: 1px solid rgba(201, 18, 93, 0.18);
  backdrop-filter: blur(6px);
  text-align: start;
  color: ${Theme.colors.textSecondary};
  z-index: 1;
  ${font({ weight: 600, fmax: 14, fmin: 12, color: Theme.colors.textSecondary })};
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

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.11.37 2.3.56 3.57.56a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.19 2.46.56 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" fill="currentColor" />
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11zm2.08-.5L12 10.58 17.92 6H6.08zM18 7.52l-5.39 4.17a1 1 0 01-1.22 0L6 7.52V18h12V7.52z" fill="currentColor" />
  </svg>
);

const LocationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s6-5.33 6-11a6 6 0 10-12 0c0 5.67 6 11 6 11zm0-8.25A2.75 2.75 0 1012 7.25a2.75 2.75 0 000 5.5z" fill="currentColor" />
  </svg>
);
