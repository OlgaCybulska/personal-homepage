import {
  List,
  Item,
  Name,
  Description,
  Links,
  LinkItem,
  LinkTitle,
  Link,
  LinkValue,
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
              <LinkValue>
                <Link target="_blank" rel="noreferrer" href={homepage}>
                  {homepage}
                </Link>
              </LinkValue>
            </LinkItem>
          )}
          <LinkItem>
            <LinkTitle>Code:</LinkTitle>
            <LinkValue>
              <Link target="_blank" rel="noreferrer" href={html_url}>
                {html_url}
              </Link>
            </LinkValue>
          </LinkItem>
        </Links>
      </Item>
    ))}
  </List>
);

export default Repositories;
