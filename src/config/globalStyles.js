import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
}

h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
}

h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
}


h3 {
   font-size: ${({ theme }) => theme.typography.h3.fontSize};
}


h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
}

h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
}

em {
    font-size: ${({ theme }) => theme.typography.em.fontSize};
}

`;

export default GlobalStyles;
