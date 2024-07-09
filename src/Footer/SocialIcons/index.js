import { List } from "./styled";
import { socials } from "./socials";

export const Socials = () => (
  <List>
    {socials.map(({ name, url, Icon }) => (
      <li key={name}>
        <a href={url} title={name} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ))}
  </List>
);
