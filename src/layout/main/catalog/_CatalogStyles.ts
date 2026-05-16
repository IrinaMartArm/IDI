import styled, { css } from "styled-components";
import { Theme } from "../../../style/Theme";
import { motion } from "framer-motion";
import { font, headingFont } from "../../../style/Common";
import NextLink from "next/link";

const Items = styled.section`
  margin: 56px 0;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;

  @media ${Theme.media.tablet} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media ${Theme.media.break} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${Theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled(motion.article)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: ${Theme.radius.large};
  //background: radial-gradient(circle at top, rgba(255,255,255,0.6), transparent);
  //border: 1px solid rgba(111, 143, 168, 0.14);
  //background: linear-gradient(180deg, rgba(242, 247, 250, 0.92), rgba(228, 237, 243, 0.74));
  //box-shadow: ${Theme.shadow.soft};
  transition: ${Theme.animations.transition};
  box-shadow: 0 10px 25px rgba(95, 18, 51, 0.10);
  border: 1px solid rgba(201, 18, 93, 0.10);
  background: linear-gradient(180deg, #FFF8FB, #F1DDE6);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${Theme.shadow.medium};
  }
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  padding: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 60%;
  background: linear-gradient(180deg, ${Theme.colors.primary50} 0%, ${Theme.colors.primary100} 100%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: ${Theme.animations.transition};

  ${Item}:hover & {
    transform: scale(1.03);
  }
`;

const Title = styled.h4`
  font-family: ${headingFont};
  letter-spacing: 0.03em;
  color: ${Theme.colors.primaryDeep};
  ${font({ family: headingFont, weight: 700, fmax: 24, fmin: 24, color: Theme.colors.primaryDeep })};
`;

const Text = styled.p`
  min-height: 72px;
  ${font({ weight: 400, fmax: 18, fmin: 16, color: Theme.colors.textMuted })};
`;

const Button = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 4px;
  color: ${Theme.colors.primary700};
  ${font({ weight: 700, fmax: 16, fmin: 16, color: Theme.colors.primary700 })};

  &::after {
    content: "→";
    transition: ${Theme.animations.transition};
  }

  ${Item}:hover &::after {
    transform: translateX(4px);
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 6px;
  border-radius: ${Theme.radius.pill};
  background: rgba(255, 244, 248, 0.92);
  border: 1px solid rgba(201, 18, 93, 0.14);

  @media ${Theme.media.tablet} {
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
`;

const Link = styled.a<{active: boolean}>`
  min-height: 42px;
  padding: 0 16px;
  border-radius: ${Theme.radius.pill};
  ${font({ weight: 600, fmax: 15, fmin: 13 })};
  color: ${Theme.colors.textMuted};
  transition: ${Theme.animations.transition};

  &:hover {
    color: ${Theme.colors.white};
    background: ${Theme.colors.primary600};
  }

  ${props => props.active && css<{active: boolean}>`
    color: ${Theme.colors.white};
    background: linear-gradient(135deg, ${Theme.colors.primary700}, ${Theme.colors.primary});
    box-shadow: ${Theme.shadow.soft};
  `}
`;

const CardLink = styled(NextLink)`
  display: block;
  height: 100%;
`;

export const St = {
  Button,
  CardLink,
  Grid,
  HeaderRow,
  Image,
  ImgBox,
  Item,
  Items,
  ItemTitle,
  Link,
  List,
  ListItem,
  Menu,
  Text,
  Title
};
