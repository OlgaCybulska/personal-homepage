import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 12px;
  }
`;

export const LetsTalk = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.letstalk};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 15.6px;
  }
`;

export const AboutMe = styled.p`
  max-width: 670px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.2px;
  text-align: justify;
  margin-bottom: 56px;
  color: ${({ theme }) => theme.colors.aboutMe};
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 16.94px;
    max-width: 288px;
  }
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 38.73px;
  color: ${({ theme }) => theme.colors.mail};
  text-decoration: none;
  margin-bottom: 24px;
  transition: 0.3s;
  letter-spacing: 0.05em;

  &:hover {
    color: ${({ theme }) => theme.colors.mailHover};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    line-height: 21.78px;
    color: ${({ theme }) => theme.colors.mail};
    font-size: 18px;
  }
`;
