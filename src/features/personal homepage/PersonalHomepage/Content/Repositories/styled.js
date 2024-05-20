import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  list-style-type: none;
  grid-gap: 24px;
  margin-bottom: 72px;
  padding: 0;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(1, auto);
    margin: 16px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  border: 6px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 56px;
  margin: 0;
  transition-duration: 200ms;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.boxShadow},
    0px -2px 50px 0px ${({ theme }) => theme.colors.boxShadow2};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.projectName};
  margin: 0;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 24px 0;
  line-height: 25, 2px;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px 0;
    font-size: 14px;
    line-height: 16.94px;
  }
`;

export const Links = styled.dl`
  color: ${({ theme }) => theme.colors.link};
  opacity: 0.2px;
  height: 25px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 14px;
    margin: 16px 0;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.link};
`;
