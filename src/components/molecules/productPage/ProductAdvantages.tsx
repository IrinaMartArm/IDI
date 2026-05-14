"use client";

import styled from "styled-components";
import { font, headingFont } from "../../../style/Common";
import { ProductAdvantagesProps } from "./types";

export const ProductAdvantages = ({ title, lead, items }: ProductAdvantagesProps) => {
  return (
    <AdvantagesSection>
      <AdvantagesTitle>{title}</AdvantagesTitle>
      {lead ? <AdvantagesLead>{lead}</AdvantagesLead> : null}
      <AdvantagesGrid>
        {items.map((item, index) => (
          <AdvantageCard key={item.title}>
            <AdvantageCardLine>
              <AdvantageIcon aria-hidden="true" $accent={index} />
              <AdvantageCardTitle>{item.title}</AdvantageCardTitle>
            </AdvantageCardLine>
            <AdvantageCardText>{item.text}</AdvantageCardText>
          </AdvantageCard>
        ))}
      </AdvantagesGrid>
    </AdvantagesSection>
  );
};

const AdvantagesSection = styled.section`
  display: grid;
  gap: 0;
  margin-top: 22px;
  padding: 30px 28px;
  border-radius: 32px;
  border: 1px solid rgba(111, 143, 168, 0.14);
  background:
    radial-gradient(circle at top right, rgba(111, 143, 168, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(242, 247, 250, 0.94));
  box-shadow: 0 14px 40px rgba(18, 52, 59, 0.08);

  @media (max-width: 900px) {
    padding: 24px 20px;
  }
`;

const AdvantagesTitle = styled.h2`
  margin: 0;
  color: #18313f;
  ${font({ family: headingFont, weight: 600, fmax: 32, fmin: 28, color: "#18313f" })};
`;

const AdvantagesLead = styled.p`
  margin: 12px 0 0;
  max-width: 72ch;
  line-height: 1.65;
  color: rgba(24, 49, 63, 0.76);
  ${font({ weight: 400, fmax: 18, fmin: 15, color: "rgba(24, 49, 63, 0.76)" })};
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.article`
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(111, 143, 168, 0.14);
  box-shadow: 0 12px 24px rgba(18, 52, 59, 0.06);

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

const AdvantageCardLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const AdvantageIcon = styled.span<{ $accent: number }>`
  position: relative;
  display: inline-flex;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  margin-top: 0.3em;
  border-radius: 50%;
  border: 1.5px solid
    ${(props) =>
      props.$accent === 0
        ? "rgba(92, 124, 148, 0.5)"
        : props.$accent === 1
          ? "rgba(73, 118, 144, 0.42)"
          : "rgba(47, 111, 115, 0.38)"};
  background: rgba(255, 255, 255, 0.88);

  &::after {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: ${(props) =>
      props.$accent === 0 ? "#6f8fa8" : props.$accent === 1 ? "#7c98ad" : "#4a768c"};
  }

  @media (max-width: 700px) {
    margin-top: 0.1em;
  }
`;

const AdvantageCardTitle = styled.h3`
  margin: 0;
  color: #18313f;
  line-height: 1.2;
  letter-spacing: -0.01em;
  ${font({ family: headingFont, weight: 700, fmax: 24, fmin: 20, color: "#18313f" })};
`;

const AdvantageCardText = styled.p`
  margin: 0;
  color: rgba(24, 49, 63, 0.8);
  line-height: 1.6;
  ${font({ weight: 500, fmax: 16, fmin: 14, color: "rgba(24, 49, 63, 0.8)" })};
`;
