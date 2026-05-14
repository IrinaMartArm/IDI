"use client";

import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Hero } from "./Hero";
import { Catalog } from "./catalog/Catalog";
import { Theme } from "../../style/Theme";
import { Title } from "../../components/Title";
import { useTranslation } from "react-i18next";

const cards = [
  { title: "expertiseCard1Title", text: "expertiseCard1Text" },
  { title: "expertiseCard2Title", text: "expertiseCard2Text" },
  { title: "expertiseCard3Title", text: "expertiseCard3Text" },
];

const brandFacts = [
  { title: "brandFact1Title", text: "brandFact1Text" },
  { title: "brandFact2Title", text: "brandFact2Text" },
  { title: "brandFact3Title", text: "brandFact3Text" },
  { title: "brandFact4Title", text: "brandFact4Text" },
];

export const MainAge = () => {
  const { t, i18n } = useTranslation("home");
  const isArmenian = i18n.resolvedLanguage === "am";

  return (
    <>
      <Hero />
      <main>
        <ExpertiseSection id="expertise">
          <Container>
            <Title>{t("expertiseTitle")}</Title>
            <ExpertiseGrid>
              {cards.map((card) => (
                <ExpertiseCard key={card.title}>
                  <ExpertiseHeader>
                    <ExpertiseIndex />
                    <h3>{t(card.title)}</h3>
                  </ExpertiseHeader>
                  <p>{t(card.text)}</p>
                </ExpertiseCard>
              ))}
            </ExpertiseGrid>
          </Container>
        </ExpertiseSection>
        <BrandSection>
          <Container>
            <BrandShell>
              <BrandIntro>
                <Title>{t("brandTitle")}</Title>
                <BrandLead>{t("brandLead")}</BrandLead>
                <BrandText>{t("brandBody1")}</BrandText>
                <BrandText>{t("brandBody2")}</BrandText>
                <BrandSource
                  href="https://www.idi-dental.com/en/page/corporate"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("brandSource")}
                </BrandSource>
              </BrandIntro>
                <BrandFactsGrid>
                  {brandFacts.map((fact) => (
                    <BrandFactCard key={fact.title}>
                      <BrandFactTitle $compact={isArmenian}>{t(fact.title)}</BrandFactTitle>
                      <BrandFactText>{t(fact.text)}</BrandFactText>
                    </BrandFactCard>
                  ))}
                </BrandFactsGrid>
            </BrandShell>
          </Container>
        </BrandSection>
        <Container>
          <Catalog />
        </Container>
      </main>
    </>
  );
};

const ExpertiseSection = styled.section`
  padding: 56px 0 36px;
`;

const BrandSection = styled.section`
  padding: 56px 0 36px;
`;

const BrandShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 24px;
  align-items: stretch;

  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const BrandIntro = styled.article`
  height: 100%;
  padding: 34px;
  border-radius: ${Theme.radius.large};
  background:
    radial-gradient(circle at top right, rgba(111, 143, 168, 0.12), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(242, 247, 250, 0.94));
  border: 1px solid rgba(111, 143, 168, 0.16);
  box-shadow: ${Theme.shadow.soft};

  @media ${Theme.media.mobile} {
    padding: 24px 20px;
  }

  ${Title} {
    margin-bottom: 40px;
  }
`;

const BrandLead = styled.p`
  margin-bottom: 14px;
  color: ${Theme.colors.primaryDeep};
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;

  @media ${Theme.media.mobile} {
    font-size: 20px;
  }
`;

const BrandText = styled.p`
  margin-top: 12px;
`;

const BrandSource = styled.a`
  display: inline-flex;
  margin-top: 20px;
  color: ${Theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  transition: ${Theme.animations.transition};

  &:hover {
    color: ${Theme.colors.primaryDeep};
  }
`;

const BrandFactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 18px;
  height: 100%;

  @media ${Theme.media.break} {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    height: auto;
  }

  @media ${Theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  @media ${Theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const BrandFactCard = styled.article`
  height: 100%;
  min-height: 196px;
  padding: 26px;
  border-radius: ${Theme.radius.large};
  background: linear-gradient(180deg, rgba(242, 247, 250, 0.96), rgba(228, 237, 243, 0.9));
  border: 1px solid rgba(111, 143, 168, 0.14);
  box-shadow: ${Theme.shadow.soft};
`;

const BrandFactTitle = styled.h3<{ $compact?: boolean }>`
  color: ${Theme.colors.primaryDeep};
  font-size: ${(props) => (props.$compact ? "19px" : "22px")};
  line-height: 1.2;
  overflow-wrap: anywhere;
  word-break: break-word;

  @media ${Theme.media.mobile} {
    font-size: ${(props) => (props.$compact ? "18px" : "20px")};
  }
`;

const BrandFactText = styled.p`
  margin-top: 10px;
  color: ${Theme.colors.textMuted};
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled.article`
  position: relative;
  overflow: hidden;
  min-height: 220px;
  padding: 28px;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(111, 143, 168, 0.14);
  background: linear-gradient(180deg, rgba(242, 247, 250, 0.92), rgba(228, 237, 243, 0.78));
  box-shadow: ${Theme.shadow.soft};

  h3 {
    color: ${Theme.colors.primaryDeep};
    font-size: 24px;
    line-height: 1.15;
  }

  p {
    margin-top: 12px;
  }
`;

const ExpertiseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ExpertiseIndex = styled.span`
  display: inline-flex;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${Theme.colors.primary700}, ${Theme.colors.primary500});
  box-shadow: ${Theme.shadow.soft};

  &::before {
    content: "";
    margin: auto;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
  }
`;
