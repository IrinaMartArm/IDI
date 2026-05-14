import {font, headingFont} from "../../../../style/Common";
import styled from "styled-components";
import {Theme} from "../../../../style/Theme";

const ProductBox = styled.div`
  position: relative;
  padding: 28px 0 46px;

  @media (max-width: 700px) {
    padding: 10px 0 30px;
  }
`

const BigImg = styled.img`
  display: none;
`

const DescriptionBox = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 40px;
  text-align: center;
  width: 100%;
  padding: 30px 28px 28px;
  margin: 22px auto;
  border-radius: ${Theme.radius.large};
  border: 1px solid rgba(111, 143, 168, 0.14);
  background:
    radial-gradient(circle at top right, rgba(111, 143, 168, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(242, 247, 250, 0.94));
  box-shadow: ${Theme.shadow.soft};

  &::before {
    content: "";
    position: absolute;
    inset: auto -60px -90px auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(228, 237, 243, 0.72), transparent 70%);
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
`

const BoxItems = styled.div`
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
`

const SmallImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: space-between;
  align-items: start;
  align-self: stretch;
  max-width: 500px;
  width: 100%;
  padding: 22px;
  border-radius: 26px;
  border: 1px solid rgba(111, 143, 168, 0.12);
  background: linear-gradient(180deg, rgba(242, 247, 250, 0.9), rgba(228, 237, 243, 0.76));
  box-shadow: 0 18px 40px rgba(18, 52, 59, 0.06);
  
`

const SmallImgBox2 = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 8px 0;
`

const SmallImg = styled.img`
  max-width: 700px;
  width: 100%;
  border-radius: 20px;
`

const SmallImg2 = styled.img`
  max-width: 1000px;
  width: 100%;
  border-radius: 20px;
`

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px 6px 6px;
  max-width: 800px;
  width: 100%;
  gap: 24px;
`

const Title = styled.h2`
  max-width: 18ch;
  margin: 0 auto 28px;
  padding: 0;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 44, fmin: 28, color: Theme.colors.primaryDeep})};
`

const Title2 = styled.div`
  padding: 6px 0;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 24, fmin: 18, color: Theme.colors.primaryDeep})};

  @media (max-width: 900px) {
    padding: 5px 0;
  }
`

const Title3 = styled.h4`
  padding: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Theme.colors.primaryDeep};
  ${font({family: headingFont, weight: 700, fmax: 28, fmin: 20, color: Theme.colors.primaryDeep})};
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: start;
  line-height: 1.6;
  color: ${Theme.colors.text};
  ${font({weight: 400, fmax: 20, fmin: 15, color: Theme.colors.text})};

  span {
    ${font({weight: 400, fmax: 24, fmin: 18, color: Theme.colors.text})};
  }
`

const Text2 = styled.div`
  text-align: start;
  line-height: 1.6;
  color: ${Theme.colors.textMuted};
  ${font({weight: 400, fmax: 19, fmin: 15, color: Theme.colors.textMuted})};
`

const Table = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(111, 143, 168, 0.22);
  box-shadow: 0 12px 30px rgba(18, 52, 59, 0.06);
`

const VideoBox = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 18px;
`

const ButtonsBox = styled.div`
  display: flex;
  gap: 50px;
`

const Button = styled.button`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 24px;
    margin-top: 20px;
    border-radius: ${Theme.radius.pill};
    ${font({weight: 600, fmax: 18, fmin: 14, color: Theme.colors.white})};
    color: ${Theme.colors.white};
    background: linear-gradient(135deg, ${Theme.colors.primary700}, ${Theme.colors.primary500});
    box-shadow: ${Theme.shadow.soft};
    transition: ${Theme.animations.transition};

    &:hover {
      transform: translateY(-1px);
      background: linear-gradient(135deg, ${Theme.colors.primary600}, ${Theme.colors.primary500});
    }
  }
`

const TableBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const TableBoxTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 100px;
`

const TableBoxTitle = styled.div`
  color: ${Theme.colors.primaryDeep};
  ${font({weight: 600, fmax: 18, fmin: 14, color: Theme.colors.primaryDeep})};
`

const TablImg = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 18px;
`

const TablImgBox = styled.div`
  max-width: 500px;
  width: 100%;
`

const Sizes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

const Size = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`
export const S = {
  ProductBox, BigImg, SmallImg, TextBox, Text, Title, SmallImgBox, DescriptionBox, Text2, Table, VideoBox, BoxItems, ButtonsBox, Button, Title2, TableBox, TableBoxTitles, TableBoxTitle, TablImg, TablImgBox, Title3, SmallImgBox2, SmallImg2, Sizes, Size
}
