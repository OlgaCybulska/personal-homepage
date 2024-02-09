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
 
}

body {
  background-color: ${({ theme }) => theme.bodyBackground}
  
}
`;
