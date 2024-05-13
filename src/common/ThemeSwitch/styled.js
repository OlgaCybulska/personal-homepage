import { css } from "styled-components";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 1;
  grid-column-end: span 3;
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.bodyBackground};
  display: flex;
  align-items: center;
`;

export const IconBox = styled.div``;

export const Icon = styled(SunIcon)``;

export const Text = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  margin-right: 12px;
`;
