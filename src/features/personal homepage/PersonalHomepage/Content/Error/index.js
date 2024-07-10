import { Wrapper, StyledErrorLogo, ErrorHeader, ErrorText } from "./styled";
import Button from "../../../../../common/Button";
import { socials } from "../../../../../Footer/SocialIcons/socials";

function Error() {
  return (
    <Wrapper>
      <StyledErrorLogo />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorText>
        Sorry, failed to load Github&nbsp;projects.
        <br />
        You can check them directly&nbsp;on&nbsp;Github.
      </ErrorText>

      <Button as="a" href={socials[0].url} target="_blank" rel="noreferrer">
        {" "}
        Go to Github
      </Button>
    </Wrapper>
  );
}

export default Error;
