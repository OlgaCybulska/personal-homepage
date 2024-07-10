import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  list-style-type: none;
  grid-gap: 32px;
  margin-bottom: 72px;
  padding: 0;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1 fr;
    grid-gap: 24px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  border: 6px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 56px;
  margin: 0;
  transition: border-color 0.3s;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.boxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.colors.boxShadow2};

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.borderHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.projectName};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 25, 2px;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px 0;
    font-size: 14px;
    line-height: 16.94px;
  }
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 14px;
    font-size: 14px;
  }
`;

export const LinkItem = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;
export const LinkTitle = styled.dt`
  color: ${({ theme }) => theme.colors.text};
`;

export const Link = styled.dd`
  color: ${({ theme }) => theme.colors.link};
  opacity: 0.2px;
  font-size: 18px;
  border-bottom: 1px solid ${(({ theme }) => theme.colors.border, 0.3)};
  padding-bottom: 1px;
  text-decoration: none;

  &:hover {
    border-color: unset;
  }
`;