import styled from "styled-components";
import { Theme } from "../../style/Theme";
import { font, headingFont } from "../../style/Common";

const Footer = styled.footer`
  margin-top: 40px;
  padding: 28px 0 40px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  //align-items: flex-start;
  //gap: 6px;
  padding: 48px 56px;
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  border-top: 1px solid rgba(255,255,255,0.08);
  background:
    radial-gradient(circle at top right, rgba(255, 228, 239, 0.14), transparent 30%),
    linear-gradient(135deg, ${Theme.colors.primary800} 0%, ${Theme.colors.primary700} 45%, ${Theme.colors.primary600} 100%);

  @media ${Theme.media.tablet} {
    padding: 38px 56px 48px ;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  max-width: 900px;

  @media ${Theme.media.tablet} {
    flex-direction: column;
  }
`;

const FooterMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;

  @media ${Theme.media.tablet} {
    flex-direction: column;
    gap: 26px;
  }
`;



const BrandLockup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: clamp(300px, 100%, 380px);
`;

const BrandName = styled.h2`
  font-family: ${headingFont};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${font({ family: headingFont, weight: 600, fmax: 18, fmin: 14, color: Theme.colors.white })};
`;

const BrandText = styled.p`
  color: rgba(255,255,255,0.7);
  margin-left: 12px;

  @media ${Theme.media.tablet} {
    margin-left: 0;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 4px;
  font-family: ${headingFont};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  ${font({ family: headingFont, weight: 700, fmax: 14, fmin: 12, color: Theme.colors.white })};
`;

const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: clamp(320px, 100%, 400px);

  p {
    ${font({ weight: 400, color: Theme.colors.white, fmax: 18, fmin: 14 })};
  }

  @media ${Theme.media.mobile} {
    height: auto;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 22px;
    opacity: 0.8;
  }
`;

const Phones = styled.div`
    display: flex;
    gap: 12px;
`

const Contact2 = styled.a`
  display: flex;
  align-items: start;
  gap: 12px;
  border-radius: 18px;
  transition: ${Theme.animations.transition};

  img {
    width: 22px;
    opacity: 0.9;
  }

  &:hover {
    background: rgba(255, 228, 239, 0.16);
  }
`;

const Social = styled.div`
  display: grid;
  gap: 6px;
  min-width: 180px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const SocialItem = styled.li``

const SocialLink = styled.li`
  a {
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: rgba(255,255,255,0.1);
    transition: ${Theme.animations.transition};
  }

  img {
    width: 22px;
    height: 22px;
  }

  a:hover {
    background: rgba(255, 228, 239, 0.22);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.56);
  ${font({ weight: 400, color: Theme.colors.white, fmax: 14, fmin: 13 })};
  margin-left: 12px;

  @media ${Theme.media.tablet} {
    margin-left: 0;
  }
`;

const Logotip = styled.img`
  width: 170px;
  object-fit: contain;

  @media ${Theme.media.tablet} {
    margin-left: -14px;
  }
`

export const S = {
  BrandLockup,
  BrandName,
  BrandText,
  Contact,
  Phones,
  Contact2,
  ContactsBox,
  Copyright,
  Footer,
  FooterWrapper,
  FooterContent,
  FooterMain,
  Social,
  SocialItem,
  SocialLink,
  SocialList,
  SectionTitle,
  Logotip
};
