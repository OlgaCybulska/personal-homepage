import { List, Item, Name, Description, Links, LinkItem, Link } from "./styled";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories?.map(({ id, name, description, homepage, html_url }) => (
      <Item key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <dl>
          {!!homepage && (
            <LinkItem>
              <dt>Demo:</dt>
              <Link target="_blank" rel="noreferrer" href={homepage}>
                {homepage}
              </Link>
            </LinkItem>
          )}
          <LinkItem>
            <dt>Code:</dt>
            <Link target="_blank" rel="noreferrer" href={html_url}>
              {html_url}
            </Link>
          </LinkItem>
        </dl>
      </Item>
    ))}
  </List>
);

export default Repositories;
