import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.sectionBackground};
  margin-bottom: 72px;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const SectionHeader = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.underline};
  padding-bottom: 15px;
  margin: 0px;
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.header};
`;

export const Content = styled.div``;
