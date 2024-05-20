import styled from "styled-components";
import { ReactComponent as Emailicon } from "../../../images/emailicon.svg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-gap: 64px;
  align-self: center;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    grid-gap: 32px;
    margin: 16px;
  }
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  grid-column-end: span 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 175px;
    height: 175px;
  }
`;
export const Wrapper = styled.div`
  max-width: 633px;
`;

export const ThisIs = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  size: 12px;
  line-height: 15.6px;
`;

export const Name = styled.h1`
  font-weight: 900;
  size: 38px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.sectionTitle};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    size: 22px;
    line-height: 27px;
  }
`;

export const AboutMe = styled.div`
  max-width: 633px;
  line-height: 28px;
  size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin: 35px 0 35px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const EmailIcon = styled(Emailicon)`
  width: 24 px;
  height: 24px;
`;
