import styled from "styled-components";
import { Theme } from "../style/Theme";
import { font, headingFont } from "../style/Common";


type TitlePropsStyled = {
    margin?: string;
};

export const Title = styled.h2<TitlePropsStyled>`
    letter-spacing: 0.08em;
    position: relative;
    margin-bottom: 64px;
    color: ${Theme.colors.primaryDeep};
    text-transform: uppercase;
    font-family: ${headingFont};
    ${font({ family: headingFont, weight: 700, fmax: 40, fmin: 28 })}

    &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 84px;
    height: 4px;
    border-radius: ${Theme.radius.pill};
    background: linear-gradient(90deg, ${Theme.colors.primary700}, ${Theme.colors.primary500});
    left: 0;
    bottom: -18px;

    @media ${Theme.media.tablet} {
        bottom: -15px;
        }
    }

    @media ${Theme.media.mobile} {
        margin-bottom: 52px;
    }
`;
