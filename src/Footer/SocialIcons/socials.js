import { StyledIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "../../images/github.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linedin.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/OlgaCybulska",
    Icon: StyledIcon(GitHubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/olga.cybulska.7",
    Icon: StyledIcon(FacebookIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/olga-cybulska-69821b30b/",
    Icon: StyledIcon(LinkedinIcon),
  },
];
