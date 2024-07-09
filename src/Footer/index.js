import { Wrapper, LetsTalk, Email, AboutMe } from "./styled";
import { Socials } from "./SocialIcons";
import { email } from "../email";

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Let's talk!</LetsTalk>
      <Email href={`mailto:${email}`}>{email}</Email>
      <AboutMe>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me 🤞
      </AboutMe>
      <Socials />
    </Wrapper>
  );
};
