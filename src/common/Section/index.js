import { StyledSection, SectionHeader, List } from "./styled";

const Section = ({ title, list }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <List>{list}</List>
  </StyledSection>
);

export default Section;
