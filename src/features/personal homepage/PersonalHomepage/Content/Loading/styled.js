import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../../images/loading.svg";

export const StyledLoadingIcon = styled(LoadingIcon)`
  width: 160px;
  height: auto;
  color: ${({ theme }) => theme.colors.spinner};

  animation: rotate infinite linear 1s;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 32px;
    width: 60px;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
