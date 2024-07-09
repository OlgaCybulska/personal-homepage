import { css } from "styled-components";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 1;
  grid-column-end: span 3;
  margin: 0;
`;

export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  outline-offset: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-right: 17px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  width: 48px;
  padding: 3px;
  border-radius: 30px;
  transition: 0.3s;
  cursor: pointer;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.switchButtonBorder};
  background-color: ${({ theme }) => theme.colors.switchButtonBackground};
`;

export const IconBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sunBox};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: transform 0.3s;

  ${({ movetoright }) =>
    movetoright &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  fill: ${({ theme }) => theme.colors.sun};
`;

export const Text = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-right: 12px;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;
