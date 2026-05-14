import {Theme} from "../../style/Theme";
import styled, {css} from "styled-components";
import {font} from "../../style/Common";
import Link from "next/link";

const CatalogBtnBox = styled.div`
	position: relative;
`
const Overlay = styled.button<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(18, 52, 59, 0.42);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  transition: ${Theme.animations.transition};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuWrapper = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  min-width: 280px;
  border-radius: ${Theme.radius.medium};
  z-index: 999;
  border: 1px solid ${Theme.colors.border};
  background-color: ${Theme.colors.white};
  box-shadow: ${Theme.shadow.medium};

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: ${Theme.animations.transition};

  ${(props) =>
          props.isOpen && css<{ isOpen: boolean }>`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          `}

  @media ${Theme.media.mobile} {
    position: fixed;
    top: 84px;
    right: 16px;
    left: 16px;
    min-width: min(280px, calc(100vw - 32px));
    z-index: 999;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.72);
    background:
      radial-gradient(circle at top right, rgba(242, 247, 250, 0.24), transparent 28%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(228, 237, 243, 0.92));
    overflow: hidden;
  }
`

const MenuHeader = styled.div`
  display: none;

  @media ${Theme.media.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 16px 8px;

    strong {
      ${font({ weight: 700, fmax: 18, fmin: 16, color: Theme.colors.primaryDeep })};
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  }
`;

const CloseButton = styled.button`
  display: none;

  @media ${Theme.media.mobile} {
    position: relative;
    display: inline-flex;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.68);
    border: 1px solid rgba(111, 143, 168, 0.18);

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
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
  }
`;

const CatalogItems = styled.ol`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  overflow-y: auto;

  @media ${Theme.media.mobile} {
    padding-top: 8px;
  }
`

const CatalogItem = styled.li<{ $active?: boolean }>`
  position: relative;
  width: 100%;
  border-radius: 16px;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: transparent;
    position: absolute;
    bottom: 6px;
    left: 14px;
    right: 14px;
    z-index: 2;
    transform: scale(0);
    transition: ${Theme.animations.transition};
  }

  ${(props) =>
    props.$active &&
    css`
      background: rgba(111, 143, 168, 0.12);
      &::before {
        transform: scale(1);
        background-color: ${Theme.colors.primary600};
      }
    `}

  &:hover, &.active {
    &::before {
      transform: scale(1);
      background-color: ${Theme.colors.primary600};
    }
  }
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: ${Theme.radius.pill};
  background: ${Theme.colors.primary50};
  border: 1px solid rgba(111, 143, 168, 0.28);
  text-align: center;
  ${font({weight: 700, fmax: 14, fmin: 12, color: Theme.colors.primaryDeep})};
  line-height: 1.2;
  color: ${Theme.colors.primaryDeep};
  transition: ${Theme.animations.transition};

  &::before {
    display: none;
  }

  &:hover, &.active {
    color: ${Theme.colors.primary700};
    background: ${Theme.colors.primary100};
  }
`

const CatalogLink = styled(Link)<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-height: 44px;
    padding: 0 14px;
    border-radius: 16px;
    //font-family: Alegreya Sans SC, sans-serif;
    ${font({weight: 600, fmax: 16, fmin: 14})};
    color: ${(props) => (props.$active ? Theme.colors.primary700 : Theme.colors.secondary)} !important;
  
`

export const S = {
	Button, CatalogBtnBox, CatalogItems, MenuWrapper, CatalogItem, CatalogLink, Overlay, MenuHeader, CloseButton
}
