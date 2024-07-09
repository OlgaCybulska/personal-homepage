import { styled } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: auto;
  padding: 115px 15px 0 15px;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-top: 45px;
  }
`;
