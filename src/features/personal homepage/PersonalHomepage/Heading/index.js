import { Wrapper, Header, Description, StyledGithubIcon } from "./styled";

function Heading() {
  return (
    <Wrapper>
      <StyledGithubIcon />
      <Header>Portfolio</Header>
      <Description>My recent projects</Description>
    </Wrapper>
  );
}

export default Heading;
