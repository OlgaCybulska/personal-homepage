import styled from "styled-components";
import { ReactComponent as Emailicon } from "../../../images/emailicon.svg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-gap: 64px;
  align-self: center;
  margin-bottom: 73px;
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  grid-column-end: span 1;
`;
export const Wrapper = styled.div``;

export const ThisIs = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  size: 12px;
  line-height: 15.6px;
`;

export const Name = styled.h1`
  font-weight: 900;
  size: 38px;
  line-height: 46px;
`;

export const AboutMe = styled.div`
  max-width: 633px;
  line-height: 28px;
  size: 20px;
  color: ${({ theme }) => theme.text};
  margin-top: 35px;
`;

export const EmailIcon = styled(Emailicon)`
  width: 24 px;
  height: 24px;
`;
