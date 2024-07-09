import {
  List,
  Item,
  Name,
  Description,
  Links,
  LinkItem,
  LinkTitle,
  Link,
} from "./styled";

import Error from "../Error";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Item key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Links>
          {!!homepage && (
            <LinkItem>
              <LinkTitle>Demo:</LinkTitle>
              <Link as="a" target="_blank" rel="noreferrer" href={homepage}>
                {homepage}
              </Link>
            </LinkItem>
          )}
          <LinkItem>
            <LinkTitle>Code:</LinkTitle>
            <Link as="a" target="_blank" rel="noreferrer" href={html_url}>
              {html_url}
            </Link>
          </LinkItem>
        </Links>
      </Item>
    ))}
  </List>
);

export default Repositories;
