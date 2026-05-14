"use client";
import styled from "styled-components";
import { Theme } from "../style/Theme";
import { font, headingFont } from "../style/Common";
import { useTranslation } from "react-i18next";

type ProductPageHeroProps = {
  bullets?: string[];
  customEyebrow?: string;
  description: string;
  flipImage?: boolean;
  imageAlt?: string;
  imageMaxHeight?: string;
  imageMobileMaxHeight?: string;
  imageSrc?: string;
  pdfHref?: string;
  title: string;
};

export const ProductPageHero = ({
  bullets,
  customEyebrow,
  description,
  flipImage = false,
  imageAlt,
  imageMaxHeight,
  imageMobileMaxHeight,
  imageSrc,
  pdfHref,
  title,
}: ProductPageHeroProps) => {
  const { t } = useTranslation("common");
  const eyebrowText = customEyebrow ?? t("productHeroEyebrow");

  return (
    <HeroSection>
      <Shell>
        <Content>
          <Eyebrow>{eyebrowText}</Eyebrow>
          <Title>{title}</Title>
          <Lead>{description}</Lead>
          {bullets?.length ? (
            <BulletList>
              {bullets.map((bullet) => (
                <Bullet key={bullet}>{bullet}</Bullet>
              ))}
            </BulletList>
          ) : null}
          <Actions>
            {pdfHref ? (
              <PrimaryAction href={pdfHref} target="_blank" rel="noreferrer">
                {t("productHeroPrimaryCta")}
              </PrimaryAction>
            ) : null}
          </Actions>
        </Content>
        <Visual>
          <>
            <VisualGlow aria-hidden="true" />
            <PreviewCard>
              <PreviewImage
                $flipImage={flipImage}
                $imageMaxHeight={imageMaxHeight}
                $imageMobileMaxHeight={imageMobileMaxHeight}
                src={imageSrc}
                alt={imageAlt}
              />
            </PreviewCard>
          </>
        </Visual>
      </Shell>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding: 10px 0 6px;
`;

const Shell = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 24px;
  align-items: stretch;
  padding: 34px;
  border-radius: ${Theme.radius.large};
  background:
    radial-gradient(circle at 76% 34%, rgba(244, 251, 255, 0.3) 0%, rgba(244, 251, 255, 0.1) 18%, transparent 42%),
    radial-gradient(circle at 82% 68%, rgba(189, 212, 229, 0.22) 0%, rgba(189, 212, 229, 0.08) 26%, transparent 56%),
    linear-gradient(145deg, #536f86 0%, #64849c 48%, #7695ad 100%);
  box-shadow: ${Theme.shadow.medium};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle at 80% 36%, rgba(255, 255, 255, 0.14), transparent 24%),
      radial-gradient(circle at 78% 58%, rgba(213, 228, 238, 0.16), transparent 30%),
      repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05) 0px,
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px,
        transparent 3px
      );
    opacity: 0.55;
    pointer-events: none;
  }

  @media ${Theme.media.break} {
    grid-template-columns: 1fr;
    background:
      radial-gradient(circle at 50% 75%, rgba(244, 251, 255, 0.3) 0%, rgba(244, 251, 255, 0.1) 18%, transparent 42%),
      radial-gradient(circle at 82% 68%, rgba(189, 212, 229, 0.22) 0%, rgba(189, 212, 229, 0.08) 26%, transparent 56%),
      linear-gradient(145deg, #536f86 0%, #64849c 48%, #7695ad 100%);
  }

  @media ${Theme.media.mobile} {
    padding: 26px 20px;
  }
`;

const Content = styled.article`
  position: relative;
  z-index: 1;
  min-width: 0;
`;

const Eyebrow = styled.p`
  margin: 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(247, 251, 253, 0.72);
  ${font({ weight: 700, fmax: 18, fmin: 12, color: Theme.colors.white })};
`;

const Title = styled.h1<{ $compact?: boolean }>`
  max-width: 15ch;
  margin-top: ${(props) => (props.$compact ? "0" : "12px")};
  color: ${Theme.colors.white};
  font-family: ${headingFont};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: pre-line;
  line-height: 1.2;
  ${font({ family: headingFont, weight: 700, fmax: 52, fmin: 26, color: Theme.colors.white })};
`;

const Lead = styled.p`
  max-width: 60ch;
  margin-top: 16px;
  color: rgba(247, 251, 253, 0.86);
  line-height: 1.65;
  ${font({ weight: 400, fmax: 20, fmin: 15, color: Theme.colors.white })};
`;

const BulletList = styled.ul`
  display: grid;
  gap: 10px;
  margin-top: 30px;
`;

const Bullet = styled.li`
  display: flex;
  align-items: start;
  gap: 12px;
  color: rgba(247, 251, 253, 0.92);
  line-height: 1.4;
  ${font({ weight: 500, fmax: 18, fmin: 14, color: Theme.colors.white })};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    margin-top: 0.5em;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.08);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
`;

const ActionBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border-radius: ${Theme.radius.pill};
  transition: ${Theme.animations.transition};
  ${font({ weight: 600, fmax: 17, fmin: 14 })};

  &:hover {
    transform: translateY(-1px);
  }
`;

const PrimaryAction = styled(ActionBase)`
  color: #16303f;
  background: rgba(217, 233, 242, 0.9);
  box-shadow: 0 14px 28px rgba(16, 36, 48, 0.12);
`;


const Visual = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 420px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 28px;
    width: 420px;
    height: 420px;
    transform: translateX(-50%);
    border-radius: 999px;
    z-index: 0;
    background: radial-gradient(circle, rgba(226, 242, 251, 0.72) 0%, rgba(170, 205, 226, 0.32) 32%, rgba(132, 176, 201, 0.12) 56%, transparent 80%);
    filter: blur(72px);
  }

  &::after {
    content: none;
  }

  @media ${Theme.media.break} {
    min-height: 260px;
  }

`;

const VisualGlow = styled.div`
  position: absolute;
  left: 50%;
  top: 16%;
  width: 360px;
  height: 360px;
  transform: translateX(-50%);
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(206, 228, 241, 0.18) 36%, rgba(111, 143, 168, 0) 74%);
  filter: blur(54px);
`;

const PreviewCard = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 10px;
    width: 280px;
    height: 120px;
    transform: translateX(-50%);
    z-index: 0;
    transform-origin: center;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.42) 0%, rgba(227, 239, 246, 0.16) 42%, rgba(223, 236, 244, 0.02) 72%);
    opacity: 0.85;
    filter: blur(44px);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 320px;
    height: 56px;
    z-index: 0;
    transform: translateX(-50%);
    border-radius: 999px;
    background: radial-gradient(circle, rgba(10, 22, 31, 0.38) 0%, rgba(10, 22, 31, 0.18) 34%, rgba(10, 22, 31, 0.06) 58%, transparent 82%);
    filter: blur(22px);
  }

  @media ${Theme.media.mobile} {
    padding: 30px 0;
  }
`;

const PreviewImage = styled.img<{
  $flipImage?: boolean;
  $imageMaxHeight?: string;
  $imageMobileMaxHeight?: string;
}>`
  position: relative;
  z-index: 2;
  display: block;
  max-width: min(100%, 470px);
  max-height: ${(props) => props.$imageMaxHeight ?? "none"};
  width: auto;
  height: auto;
  object-fit: contain;
  transform: ${(props) => {
    const flip = props.$flipImage ? -1 : 1;
    return `translate(0, 8px) scaleX(${flip})`;
  }};
  animation: id3Float 5.8s ease-in-out infinite;
  filter: drop-shadow(0 10px 12px rgba(255, 255, 255, 0.24)) drop-shadow(0 26px 34px rgba(14, 31, 40, 0.28)) drop-shadow(0 52px 72px rgba(14, 31, 40, 0.28));

  @keyframes id3Float {
    0%, 100% {
      transform: ${(props) => `translate(0, 8px) scaleX(${props.$flipImage ? -1 : 1})`};
    }

    50% {
      transform: ${(props) => `translate(0, 0) scaleX(${props.$flipImage ? -1 : 1})`};
    }
  }

  @media ${Theme.media.mobile} {
    max-height: ${(props) => props.$imageMobileMaxHeight ?? props.$imageMaxHeight ?? "none"};
  }
`;
