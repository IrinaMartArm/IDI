"use client";

import styled from "styled-components";
import { font, headingFont } from "../../../style/Common";
import { Theme } from "../../../style/Theme";
import { ProductGridTwo } from "../../Atoms/productPage";
import { ProductProcessCardProps, ProductProcessProps } from "./types";
import { SharedSection, SharedSectionHead, SharedSectionTitle } from "./shared";

export const ProductProcessCard = ({
  number,
  title,
  text,
  featured = false,
  cardVariant = "default",
  numberVariant = "plain",
  textTone = "default",
}: ProductProcessCardProps) => {
  return (
    <ProcessCard $featured={featured} $variant={cardVariant}>
      <WorkflowHeading>
        <ProcessNumber $variant={numberVariant}>{number}</ProcessNumber>
        <ProcessTitle $variant={cardVariant}>{title}</ProcessTitle>
      </WorkflowHeading>
      <ProcessText $tone={textTone}>{text}</ProcessText>
    </ProcessCard>
  );
};

export const ProductProcess = ({ title, workflowSteps }: ProductProcessProps) => {
  return (
    <SharedSection>
      <SharedSectionHead>
        <SharedSectionTitle>{title}</SharedSectionTitle>
      </SharedSectionHead>
      <ProductGridTwo>
        {workflowSteps.map((step) => (
          <ProductProcessCard
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
            featured={step.featured}
            cardVariant={step.cardVariant}
            numberVariant={step.numberVariant}
            textTone={step.textTone}
          />
        ))}
      </ProductGridTwo>
    </SharedSection>
  );
};

const WorkflowHeading = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`;

const ProcessCard = styled.article<{ $featured: boolean; $variant: "default" | "soft" }>`
  display: grid;
  gap: 10px;
  padding: ${(props) => (props.$variant === "soft" ? "22px 24px" : "24px")};
  border-radius: ${(props) => (props.$variant === "soft" ? "22px" : "20px")};
  background: ${(props) =>
    props.$variant === "soft"
      ? "linear-gradient(180deg, rgba(255, 251, 253, 0.98), rgba(248, 238, 243, 0.94))"
      : "rgba(255, 255, 255, 0.96)"};
  border: 1px solid
    ${(props) => (props.$featured ? "rgba(201, 18, 93, 0.2)" : "rgba(201, 18, 93, 0.14)")};
  box-shadow: ${(props) =>
    props.$variant === "soft"
      ? "0 12px 26px rgba(95, 18, 51, 0.10), 0 2px 0 rgba(255, 255, 255, 0.7) inset"
      : props.$featured
        ? "0 18px 34px rgba(95, 18, 51, 0.12)"
        : "0 14px 32px rgba(95, 18, 51, 0.08)"};
  transition: ${Theme.animations.transition};

  &:hover {
    transform: ${(props) => (props.$variant === "soft" ? "scale(1.01)" : "none")};
  }
`;

const ProcessNumber = styled.span<{ $variant: "plain" | "pill" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: ${(props) => (props.$variant === "pill" ? "54px" : "auto")};
  padding: ${(props) => (props.$variant === "pill" ? "8px 14px" : "0")};
  border-radius: ${(props) => (props.$variant === "pill" ? "999px" : "0")};
  background: ${(props) =>
    props.$variant === "pill"
      ? "linear-gradient(180deg, rgba(255, 246, 250, 0.98), rgba(247, 225, 235, 0.96))"
      : "transparent"};
  box-shadow: ${(props) =>
    props.$variant === "pill"
      ? "0 10px 18px rgba(95, 18, 51, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
      : "none"};
  color: ${Theme.colors.primary500};
  letter-spacing: ${(props) => (props.$variant === "pill" ? "0.04em" : "0.06em")};
  ${font({ family: headingFont, weight: 700, fmax: 28, fmin: 18, color: Theme.colors.primary500 })};
`;

const ProcessTitle = styled.h3<{ $variant: "default" | "soft" }>`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  text-shadow: ${(props) => (props.$variant === "soft" ? "0 1px 0 rgba(255, 255, 255, 0.7)" : "none")};
  ${font({ family: headingFont, weight: 700, fmax: 24, fmin: 18, color: Theme.colors.primaryDeep })};
`;

const ProcessText = styled.p<{ $tone: "default" | "muted" }>`
  margin: 0;
  line-height: 1.6;
  color: ${(props) => (props.$tone === "muted" ? Theme.colors.textMuted : "rgba(86, 16, 45, 0.78)")};
  ${font({ weight: 500, fmax: 16, fmin: 14, color: Theme.colors.textMuted })};
`;
