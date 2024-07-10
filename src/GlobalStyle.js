import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  
}

*, ::after, ::befor {
  box-sizing: inherit;
}


body {
  width: 100%;
  max-width: 1216px;
  background-color: ${({ theme }) => theme.colors.body.background};
  transition: background  0.3s;
  font-family: 'Inter', sans-serif;
  word-break: break-word;
  padding-bottom: 108px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-bottom: 32px;
  }
 
}
`;
