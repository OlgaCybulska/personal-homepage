import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../images/github.svg";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.header};
  font-size: 30px;
  line-height: 36.31px;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.header};
  letter-spacing: 0.05em;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const StyledGithubIcon = styled(GithubIcon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.githubeIcon};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
