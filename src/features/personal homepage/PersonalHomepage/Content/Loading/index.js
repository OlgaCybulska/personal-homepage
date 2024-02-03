import { Wrapper, StyledLoadingIcon } from "./styled";

function Loading() {
  return (
    <Wrapper>
      <p>Please wait, projects are being loaded...</p>
      <StyledLoadingIcon />
    </Wrapper>
  );
}

export default Loading;
