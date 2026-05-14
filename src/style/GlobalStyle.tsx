import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --swiper-theme-color: ${Theme.colors.primary} !important;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Noto Sans Armenian', 'Noto Sans', 'Avenir Next', 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background:
                radial-gradient(circle at top left, rgba(111, 143, 168, 0.22), transparent 30%),
                radial-gradient(circle at top right, rgba(228, 237, 243, 0.8), transparent 34%),
                linear-gradient(180deg, ${Theme.colors.primary50} 0%, ${Theme.colors.background} 44%, #eef4f8 100%);
        color: ${Theme.colors.text};
        line-height: 1.5;
        min-width: 360px;
    }

    body.menu-open {
        overflow: hidden;
    }

    a, a:link, a:visited  {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    a:hover  {
        text-decoration: none;
    }

    ul, ul li, ol, ol li {
        list-style: none;
    }

    button, input[type="submit"] {
    /* display: inline-block; */
    box-shadow: none;
    background-color: transparent;
    background: none;
    border: none;
    cursor: pointer;
    }

    input:focus, input:active, 
    button:focus, button:active, 
	select:active, select:focus{
        outline: none;
    }


    section {
        padding: 24px 0;
    }
    
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        color: ${Theme.colors.textMuted};
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1, h2, h3, h4 {
        color: ${Theme.colors.text};
        line-height: 1.1;
    }

    ::selection {
        background: ${Theme.colors.primarySoft};
    }
`
