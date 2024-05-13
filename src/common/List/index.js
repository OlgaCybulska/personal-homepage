import { StyledList, ListItem, Dotlist } from "./styled";

const List = ({ skills }) => (
  <StyledList>
    {skills.map((skill) => (
      <ListItem key={skill}>
        <Dotlist />
        {skill}
      </ListItem>
    ))}
  </StyledList>
);

export default List;
