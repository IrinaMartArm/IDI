"use client";

import { ReactNode } from "react";
import styled from "styled-components";

export const ProductVisualScene = ({ children }: { children: ReactNode }) => {
  return (
    <ProductScene>
      <ProductSceneGlow aria-hidden="true" />
      <ProductSceneTop aria-hidden="true" />
      <ProductSceneStage>{children}</ProductSceneStage>
    </ProductScene>
  );
};

const ProductScene = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  align-self: stretch;
  max-width: 500px;
  width: 100%;
  min-height: 100%;
  padding: 26px 22px 22px;
  border-radius: 28px;
  border: 1px solid rgba(111, 143, 168, 0.12);
  background:
    radial-gradient(circle at 50% 34%, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0) 38%),
    linear-gradient(180deg, rgba(242, 247, 250, 0.96), rgba(228, 237, 243, 0.82));
  box-shadow: 0 22px 44px rgba(18, 52, 59, 0.08);

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const ProductSceneGlow = styled.div`
  position: absolute;
  left: 50%;
  top: 18%;
  width: 220px;
  height: 220px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(224, 238, 247, 0.82) 0%, rgba(224, 238, 247, 0.26) 34%, rgba(224, 238, 247, 0) 74%);
  filter: blur(34px);
  z-index: 0;
`;

const ProductSceneTop = styled.div`
  position: absolute;
  left: 50%;
  top: 18px;
  width: 220px;
  height: 88px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.14) 40%, rgba(255, 255, 255, 0) 76%);
  filter: blur(18px);
  z-index: 0;
`;

const ProductSceneStage = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 16px;
    width: 250px;
    height: 44px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: radial-gradient(circle, rgba(12, 28, 37, 0.26) 0%, rgba(12, 28, 37, 0.12) 38%, rgba(12, 28, 37, 0) 76%);
    filter: blur(16px);
  }
`;
