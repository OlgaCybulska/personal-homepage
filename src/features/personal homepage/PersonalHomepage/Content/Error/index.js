import { Wrapper, StyledErrorLogo } from "./styled";

function Error() {
  return (
    <Wrapper>
      <StyledErrorLogo />
      <h3>Ooops! Something went wrong...</h3>
      <p>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </p>
    </Wrapper>
  );
}

export default Error;
