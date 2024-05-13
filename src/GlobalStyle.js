import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;

 ;
}

*, ::after, ::befor {
  box-sizing: inherit;
}
#root {
  width: 100%;
  max-width: 1089px;
  margin-left: 353px;
  margin-top: 119px;
 
}

body {
  background-color: ${({ theme }) => theme.bodyBackground}
  
}
`;
