"use client";

import styled from "styled-components";
import { font, headingFont } from "../../../style/Common";
import { Theme } from "../../../style/Theme";
import { ProductDetailsPanelProps, ProductDetailsProps } from "./types";
import { ProductVisualScene } from "./ProductVisualScene";

export const ProductDetailsPanel = ({
  title,
  lead,
  features,
  chipGroups = [],
}: ProductDetailsPanelProps) => {
  return (
    <DetailsBox>
      <DetailsHeading>{title}</DetailsHeading>
      <DetailsLead>{lead}</DetailsLead>
      <MiniFeaturesGrid>
        {features.map((feature) => (
          <MiniFeatureCard key={feature.label}>
            <MiniFeatureLabel>{feature.label}</MiniFeatureLabel>
            <MiniFeatureValue>{feature.value}</MiniFeatureValue>
          </MiniFeatureCard>
        ))}
      </MiniFeaturesGrid>
      {chipGroups.map((group) => (
        <ChipsBlock key={group.label}>
          <ChipsLabel>{group.label}</ChipsLabel>
          <ChipsWrap>
            {group.values.map((value) => (
              <Chip key={value}>{value}</Chip>
            ))}
          </ChipsWrap>
        </ChipsBlock>
      ))}
    </DetailsBox>
  );
};

export const ProductDetails = ({
  media,
  title,
  lead,
  features,
  chipGroups = [],
}: ProductDetailsProps) => {
  return (
    <DetailsSection>
      <DetailsLayout>
        <ProductVisualScene>{media}</ProductVisualScene>
        <ProductDetailsPanel title={title} lead={lead} features={features} chipGroups={chipGroups} />
      </DetailsLayout>
    </DetailsSection>
  );
};

const DetailsSection = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 40px;
  text-align: center;
  width: 100%;
  padding: 30px 28px 28px;
  margin: 22px auto;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(201, 18, 93, 0.14);
  background:
    radial-gradient(circle at top right, rgba(201, 18, 93, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(248, 237, 242, 0.94));
  box-shadow: ${Theme.shadow.soft};

  &::before {
    content: "";
    position: absolute;
    inset: auto -60px -90px auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(248, 217, 230, 0.72), transparent 70%);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    overflow: visible;
    padding: 0;
    margin: 24px auto;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    flex-direction: column;
    gap: 20px;

    &::before {
      display: none;
    }
  }
`;

const DetailsLayout = styled.div`
  display: flex;
  align-items: stretch;
  gap: 28px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 6px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 820px;
  gap: 24px;
  padding: 32px;
  text-align: left;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(201, 18, 93, 0.10);
  border-radius: 24px;
  box-shadow: 0 8px 30px rgba(95, 18, 51, 0.08);

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

const DetailsHeading = styled.h2`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 34, fmin: 24, color: Theme.colors.primaryDeep })};
`;

const DetailsLead = styled.p`
  max-width: 44ch;
  margin: 0;
  color: rgba(86, 16, 45, 0.72);
  white-space: pre-line;
  ${font({ weight: 400, fmax: 18, fmin: 15, color: Theme.colors.textMuted })};
`;

const MiniFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MiniFeatureCard = styled.article`
  display: grid;
  gap: 6px;
  padding: 18px 18px 16px;
  border-radius: 18px;
  background: rgba(255, 246, 250, 0.92);
  border: 1px solid rgba(201, 18, 93, 0.1);
  box-shadow: 0 8px 20px rgba(95, 18, 51, 0.06);
`;

const MiniFeatureLabel = styled.span`
  color: ${Theme.colors.textMuted};
  ${font({ weight: 600, fmax: 16, fmin: 14, color: Theme.colors.textMuted })};
`;

const MiniFeatureValue = styled.strong`
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 22, fmin: 18, color: Theme.colors.primaryDeep })};
`;

const ChipsBlock = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 16px;
  background: rgba(251, 244, 247, 0.96);
  border: 1px solid rgba(201, 18, 93, 0.12);

  @media (max-width: 700px) {
    padding: 12px;
  }
`;

const ChipsLabel = styled.span`
  color: ${Theme.colors.textMuted};
  ${font({ weight: 600, fmax: 13, fmin: 12, color: Theme.colors.textMuted })};
`;

const ChipsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: ${Theme.radius.pill};
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(201, 18, 93, 0.14);
  color: ${Theme.colors.primaryDeep};
  box-shadow: 0 6px 16px rgba(95, 18, 51, 0.06);
  ${font({ weight: 600, fmax: 15, fmin: 13, color: Theme.colors.primaryDeep })};

  @media (max-width: 900px) {
    padding: 0 8px;
  }
`;
