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
import { email } from "../personalData";

export const Header = () => {
  return (
    <Section>
      <ThemeSwitch />
      <Image src={photo} alt="Olga_Cybulska" />
      <Wrapper>
        <ThisIs>THIS IS</ThisIs>
        <Name>Olga Cybulska</Name>
        <AboutMe>
          👩🏻💻Tutaj bedzie test o mnie. wiecej tekstu. Nananananananaa.
        </AboutMe>
        <Button as="a" href={`mailto:${email}`}>
          <EmailIcon />
          Hire me
        </Button>
      </Wrapper>
    </Section>
  );
};
