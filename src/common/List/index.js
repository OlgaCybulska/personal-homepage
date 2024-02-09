import { StyledList, ListItem } from "./styled";

const List = ({ skills }) => (
  <StyledList>
    {skills.map((skill) => (
      <ListItem key={skill}>{skill}</ListItem>
    ))}
  </StyledList>
);

export default List;
