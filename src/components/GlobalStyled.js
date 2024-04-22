import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing:border-box;
    }

    body{
    }

    a{
        color: #1d1d1d;
        text-decoration: none;
    }

    img{
        width: 100%;
        display: block;
    }

`;