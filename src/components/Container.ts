import styled from "styled-components";
import { Theme } from "../style/Theme";

type ContainerPropsType = {
	padding?: string
	display?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1240px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || '0 20px'};
  	display: ${props => props.display || 'block'};
    margin: 0 auto;

    @media ${Theme.media.mobile} {
        padding: ${props => props.padding || '0 16px'};
    }
`
