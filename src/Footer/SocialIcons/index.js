import { List, ListItem } from "./styled";
import { socials } from "./socials";

export const Socials = () => (
  <List>
    {socials.map(({ name, url, Icon }) => (
      <ListItem key={name}>
        <a href={url} title={name} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </ListItem>
    ))}
  </List>
);
