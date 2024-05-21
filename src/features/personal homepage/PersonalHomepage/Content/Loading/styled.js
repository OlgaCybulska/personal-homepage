import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../../images/loading.svg";

export const StyledLoadingIcon = styled(LoadingIcon)`
  width: 160px;
  height: 160px;

  animation: rotate infinite linear 1s;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;
