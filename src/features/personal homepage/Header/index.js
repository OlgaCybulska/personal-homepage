import photo from "../../../images/zdjęcie.png";
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
import Button from "../Button";
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
          👩🏻💻 I'm a passionate Frontend Developer in love with React, currently
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
