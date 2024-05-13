import { Wrapper, LetsTalk, Email, AboutMe } from "./styled";
import { Socials } from "./SocialIcons";
import { email } from "../features/personal homepage/personalData";

export const Footer = () => {
  return (
    <Wrapper>
      <LetsTalk>Let's talk!</LetsTalk>
      <Email href={`mailto:${email}`}>{email}</Email>
      <AboutMe>tutaj bedzie jakis tekst nananan</AboutMe>
      <Socials />
    </Wrapper>
  );
};
