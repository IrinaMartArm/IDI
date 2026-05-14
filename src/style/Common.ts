import { Theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    fmin?: number
    fmax?: number
}

const defaultFamily =
    "'Noto Sans Armenian','Noto Sans','Avenir Next','Segoe UI',sans-serif";

export const headingFont =
    "'Alegreya Sans SC','Noto Sans Armenian','Noto Sans','Avenir Next',sans-serif";

export const font = ({ family, weight, color, fmin, fmax }: FontPropsType) => `
  font-family: ${family || defaultFamily};
  font-weight: ${weight || 400};
  color: ${color || Theme.colors.text};
  font-size: calc((100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px);
`;
