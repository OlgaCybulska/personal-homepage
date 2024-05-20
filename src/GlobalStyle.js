import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

*, ::after, ::befor {
  box-sizing: inherit;
}
#root {
  width: 100%;
  max-width: 1216px;
  margin-left: 353px;
  margin-top: 119px;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px;

  }
}

body {
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  transition: 0.3s;
 
}
`;
