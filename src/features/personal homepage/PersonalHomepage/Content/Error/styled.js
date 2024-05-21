import styled from "styled-components";
import { ReactComponent as ErrorLogo } from "../../../../../images/danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 12px;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.errorText};
  font-size: 20px;
  letter-spacing: 0.05em;
  margin-bottom: 40px;
  line-height: 28px;
`;
export const ErrorHeader = styled.h2`
  color: ${({ theme }) => theme.colors.header};
  font-size: 24px;
  letter-spacing: 0.05em;
`;

export const StyledErrorLogo = styled(ErrorLogo)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
