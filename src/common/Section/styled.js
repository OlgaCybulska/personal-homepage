import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  margin-bottom: 72px;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.boxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.colors.boxShadow2};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: ;
    margin: 48px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 16px;
    margin-bottom: 50px;
    gap: 12px;
  }
`;

export const SectionHeader = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.colors.underline};
  padding-bottom: 16px;
  margin: 0;
  font-weight: 900;
  font-size: 30px;
  line-height: 36.61px;
  color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.div`
  margin: 0;
`;
