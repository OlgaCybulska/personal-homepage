import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 24px;
  width: 264px;
  height: 48px;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const StyledIcon = (Icon) => styled(Icon)`
  height: 48px;
  width: 48px;
  fill: ${({ theme }) => theme.icons};
  transition: 0.3s;
`;
