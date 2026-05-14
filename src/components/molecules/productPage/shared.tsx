"use client";

import styled from "styled-components";
import { font, headingFont } from "../../../style/Common";
import { Theme } from "../../../style/Theme";

export const SharedSection = styled.section`
  display: grid;
  gap: 28px;
  margin-top: 22px;
  padding: 30px 28px;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(111, 143, 168, 0.14);
  background:
    radial-gradient(circle at top right, rgba(111, 143, 168, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(242, 247, 250, 0.94));
  box-shadow: ${Theme.shadow.soft};

  @media (max-width: 900px) {
    padding: 24px 20px;
  }
`;

export const SharedSectionHead = styled.div`
  display: grid;
  gap: 10px;
`;

export const SharedSectionTitle = styled.h2`
  margin: 0;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 30, fmin: 24, color: Theme.colors.primaryDeep })};
`;

export const SharedSectionLead = styled.p`
  margin: 0;
  max-width: 70ch;
  line-height: 1.65;
  color: rgba(24, 49, 63, 0.76);
  ${font({ weight: 400, fmax: 18, fmin: 15, color: "rgba(24, 49, 63, 0.76)" })};
`;
