import { css } from "styled-components";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.background};
  grid-column-start: 1;
  grid-column-end: span 3;
`;

export const Button = styled.button`
  border: solid;
`;

export const IconBox = styled.div`
  ${({ movetoright }) =>
    movetoright &&
    css`
      background-color: red;
    `}
`;

export const Icon = styled(SunIcon)``;

export const Text = styled.p``;
