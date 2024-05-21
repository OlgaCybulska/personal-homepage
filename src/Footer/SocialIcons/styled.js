import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 24px;
  width: 264px;
  height: 48px;
  align-items: flex-start;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const StyledIcon = (Icon) => styled(Icon)`
  height: 48px;
  width: 48px;
  fill: ${({ theme }) => theme.colors.icons};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
