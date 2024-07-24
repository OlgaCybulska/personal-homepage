import photo from "../../../images/olga_cybulska.jpeg";
import {
  Section,
  Wrapper,
  Image,
  ThisIs,
  Name,
  AboutMe,
  EmailIcon,
} from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import Button from "../../../common/Button";
import { email } from "../../../email";

export const Header = () => {
  return (
    <Section>
      <ThemeSwitch />
      <Image src={photo} alt="Olga_Cybulska" />
      <Wrapper>
        <ThisIs>THIS IS</ThisIs>
        <Name>Olga Cybulska</Name>
        <AboutMe>
          👩🏻💻 I'm a passionate Frontend Developer in love with React. In the
          future, I would like to work as a Full-Stack Developer. Currently I'm
          looking for new job opportunities.
        </AboutMe>
        <Button as="a" href={`mailto:${email}`} title={email}>
          <EmailIcon />
          Hire me
        </Button>
      </Wrapper>
    </Section>
  );
};
