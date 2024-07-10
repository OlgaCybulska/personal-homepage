import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 24px;
  width: 264px;
  height: 48px;
  align-items: flex-start;
  padding: 0;
  list-style-type: none;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 40px;
    gap: 16px;
  }
`;

export const StyledIcon = (Icon) => styled(Icon)`
  height: 48px;
  width: 48px;
  color: ${({ theme }) => theme.colors.icons.color};

  &:hover {
    color: ${({ theme }) => theme.colors.icons.hover};
    transition: 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
