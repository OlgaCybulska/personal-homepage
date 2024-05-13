import styled from "styled-components";

export const Wrapper = styled.div``;

export const LetsTalk = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const AboutMe = styled.p`
  max-width: 670px;
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 38.73px;
  color: ${({ theme }) => theme.mailText};
  text-decoration: none;
`;
