"use client";

import styled from "styled-components";
import { font, headingFont } from "../../style/Common";
import { Theme } from "../../style/Theme";

export const ProductSceneMedia = styled.div`
  width: 100%;
  max-width: 360px;
`;

export const ProductCardCopy = styled.div`
  display: grid;
  gap: 10px;
  text-align: left;
`;

export const ProductCardTitle = styled.h3<{
  $tone?: "default" | "neutral";
}>`
  margin: 0;
  color: ${(props) => (props.$tone === "neutral" ? Theme.colors.text : Theme.colors.primaryDeep)};
  ${font({
    family: headingFont,
    weight: 700,
    fmax: 22,
    fmin: 18,
    color: Theme.colors.primaryDeep,
  })};
`;

export const ProductCardSubtitle = styled.p<{
  $tone?: "accent" | "muted";
  $weight?: 500 | 600;
  $size?: "sm" | "md";
}>`
  margin: 0;
  color: ${(props) => (props.$tone === "muted" ? "#6B7280" : Theme.colors.primary500)};
  ${font({
    weight: 600,
    fmax: 18,
    fmin: 16,
    color: Theme.colors.primary500,
  })};
  font-weight: ${(props) => props.$weight ?? 600};
  font-size: ${(props) => (props.$size === "sm" ? "14px" : "18px")};
  line-height: ${(props) => (props.$size === "sm" ? 1.35 : 1.45)};
`;

export const ProductBulletList = styled.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ProductBulletItem = styled.li<{
  $tone?: "default" | "muted" | "neutral";
  $bulletTone?: "accent" | "muted";
  $weight?: 400 | 500;
  $size?: "sm" | "md";
}>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.4;
  color: ${(props) =>
    props.$tone === "muted"
      ? Theme.colors.textMuted
      : props.$tone === "neutral"
        ? Theme.colors.text
        : "rgba(86, 16, 45, 0.78)"};
  ${font({
    weight: 500,
    fmax: 16,
    fmin: 14,
    color: Theme.colors.textMuted,
  })};
  font-weight: ${(props) => props.$weight ?? 500};
  font-size: ${(props) => (props.$size === "sm" ? "14px" : "16px")};

  &::before {
    content: "•";
    flex: 0 0 auto;
    color: ${(props) => (props.$bulletTone === "muted" ? "#6B7280" : Theme.colors.primary500)};
  }
`;

export const ProductGridThree = styled.div<{
  $tabletColumns?: 1 | 2;
  $tabletBreakpoint?: number;
  $mobileBreakpoint?: number;
}>`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${(props) => `${props.$tabletBreakpoint ?? 980}px`}) {
    grid-template-columns: repeat(${(props) => props.$tabletColumns ?? 1}, minmax(0, 1fr));
  }

  @media (max-width: ${(props) => `${props.$mobileBreakpoint ?? 760}px`}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductGridTwo = styled.div<{
  $mobileBreakpoint?: number;
}>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: ${(props) => `${props.$mobileBreakpoint ?? 900}px`}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductSceneImage = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  object-fit: contain;
  filter:
    drop-shadow(0 12px 14px rgba(255, 255, 255, 0.2))
    drop-shadow(0 28px 34px rgba(67, 4, 31, 0.20))
    drop-shadow(0 54px 72px rgba(67, 4, 31, 0.16));
`;
