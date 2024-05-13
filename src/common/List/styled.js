import styled from "styled-components";
import { ReactComponent as Dot } from "../../images/dot.svg";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 115px;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(1, auto);
  }
  @media (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) and (max-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const Dotlist = styled(Dot)`
  width: 9px;
  height: 9px;
  margin-right: 16px;
`;
