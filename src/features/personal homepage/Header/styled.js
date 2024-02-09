import styled from "styled-components";
import { ReactComponent as Emailicon } from "../../../images/emailicon.svg";

export const Section = styled.section`
  display: grid;
  grid-template-rows: repeat(3, auto);
`;

export const Image = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  grid-column-end: span 1;
`;
export const Wrapper = styled.div``;

export const ThisIs = styled.p``;

export const Name = styled.h1``;

export const AboutMe = styled.div``;

export const EmailIcon = styled(Emailicon)`
  width: 24 px;
  height: 24px;
`;
