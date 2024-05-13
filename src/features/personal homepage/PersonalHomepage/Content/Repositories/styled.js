import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  list-style-type: none;
  grid-gap: 24px;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.sectionBackground};
  padding: 56px;
  border: 6px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.projectName};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25, 2px;
  color: ${({ theme }) => theme.text};
`;

export const Links = styled.dl``;

export const LinkItem = styled.div``;

export const Link = styled.a`
  color: ${({ theme }) => theme.link};
`;
