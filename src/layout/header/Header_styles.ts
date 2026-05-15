import styled, { css } from "styled-components";
import Link from "next/link";
import { Theme } from "../../style/Theme";
import { font, headingFont } from "../../style/Common";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1200;
  padding: 16px 0 0;

  @media ${Theme.media.mobile} {
    padding: 10px 0 0;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: ${Theme.radius.large};
  background: rgba(255, 252, 253, 0.88);
  box-shadow: ${Theme.shadow.soft};

  @media ${Theme.media.mobile} {
    gap: 12px;
    padding: 8px 12px;
    border-radius: 22px;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-width: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;

  strong {
    font-family: ${headingFont};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    ${font({ family: headingFont, weight: 700, fmax: 24, fmin: 18, color: Theme.colors.primaryDeep })};
  }

  span {
    max-width: 28ch;
    ${font({ weight: 500, fmax: 14, fmin: 12, color: Theme.colors.textMuted })};
  }

  @media ${Theme.media.mobile} {
    span {
      display: none;
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  @media ${Theme.media.break} {
    display: none;
  }
`;

const linkStyles = css`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: ${Theme.radius.pill};
  color: ${Theme.colors.text};
  transition: ${Theme.animations.transition};
  ${font({ weight: 600, fmax: 16, fmin: 14 })};

  &:hover {
    background: ${Theme.colors.primary100};
    color: ${Theme.colors.primary700};
  }
`;

const NavLink = styled(Link)`
  ${linkStyles};
`;

const Products = styled.div`
  position: relative;
`;

const ProductsButton = styled.button`
  ${linkStyles};
`;

const ProductsMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: min(420px, 70vw);
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: ${Theme.radius.medium};
  border: 1px solid ${Theme.colors.border};
  background: rgba(255, 255, 255, 0.96);
  box-shadow: ${Theme.shadow.medium};
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: ${Theme.animations.transition};

  ${(props) =>
    props.$open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

const ProductItem = styled(Link)`
  display: grid;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 16px;
  transition: ${Theme.animations.transition};

  strong {
    ${font({ weight: 700, fmax: 16, fmin: 14, color: Theme.colors.primaryDeep })};
  }

  span {
    ${font({ weight: 400, fmax: 13, fmin: 12, color: Theme.colors.textMuted })};
  }

  &:hover {
    background: ${Theme.colors.primary50};
  }
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${Theme.media.mobile} {
    gap: 8px;
  }
`;

const MobileToggle = styled.button<{ $open?: boolean }>`
  display: none;
  min-width: 96px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: ${Theme.radius.pill};
  background: ${Theme.colors.primary50};
  border: 1px solid rgba(201, 18, 93, 0.22);
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1002;
  transition: ${Theme.animations.transition};
  ${font({ weight: 700, fmax: 14, fmin: 12, color: Theme.colors.primaryDeep })};

  &:hover {
    background: ${Theme.colors.primary100};
  }

  @media ${Theme.media.break} {
    display: inline-flex;
  }

  @media ${Theme.media.mobile} {
    min-width: 84px;
    min-height: 38px;
    padding: 0 14px;
  }
`;

const MobileOverlay = styled.button<{ $open: boolean }>`
  display: block;
  position: fixed;
  inset: 0;
  z-index: 1998;
  background: rgba(18, 52, 59, 0.42);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transition: ${Theme.animations.transition};
`;

const MobileModal = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 96px;
  right: 20px;
  left: 20px;
  z-index: 1999;
  display: grid;
  gap: 14px;
  padding: 18px;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(255, 255, 255, 0.82);
  background:
    radial-gradient(circle at top right, rgba(255, 230, 240, 0.18), transparent 28%),
    linear-gradient(180deg, rgba(142, 12, 66, 0.98), rgba(67, 4, 31, 0.98));
  box-shadow: ${Theme.shadow.medium};
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transform: translateY(${(props) => (props.$open ? "0" : "-14px")});
  transition: ${Theme.animations.transition};

  @media (min-width: 769px) {
    display: none;
  }

  @media ${Theme.media.mobile} {
    top: 88px;
    right: 16px;
    left: 16px;
    padding: 16px;
  }
`;

const MobileModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  strong {
    ${font({ family: headingFont, weight: 700, fmax: 22, fmin: 18, color: Theme.colors.white })};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

const MobileModalClose = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  flex: 0 0 42px;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 2px;
    border-radius: ${Theme.radius.pill};
    background: ${Theme.colors.white};
  }

  span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  span:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const MobileProducts = styled.div`
  display: grid;
  gap: 8px;
`;

const MobileProductLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid ${(props) => (props.$active ? "rgba(255, 255, 255, 0.36)" : "rgba(255, 255, 255, 0.12)")};
  background: ${(props) => (props.$active ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.06)")};
  color: rgba(255, 255, 255, 0.96);
  transition: ${Theme.animations.transition};
  ${font({ weight: 700, fmax: 16, fmin: 14, color: Theme.colors.white })};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);

  &:hover {
    background: ${(props) => (props.$active ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.1)")};
  }
`;

const LogotipDesktop = styled.img`
  width: 86px;
  object-fit: contain;

  @media ${Theme.media.tablet} {
    display: none;
  }
`;

const LogotipMobile = styled.img`
  display: none;
  width: 46px;
  height: 46px;
  object-fit: contain;

  @media ${Theme.media.tablet} {
    display: block;
    width: 46px;
    height: 46px;
  }
`;

export const S = {
  Bar,
  Brand,
  BrandText,
  DesktopNav,
  Header,
  LogotipDesktop,
  LogotipMobile,
  MobileModal,
  MobileModalClose,
  MobileModalHeader,
  MobileOverlay,
  MobileProductLink,
  MobileProducts,
  MobileToggle,
  NavLink,
  ProductItem,
  Products,
  ProductsButton,
  ProductsMenu,
  Tools,
};
