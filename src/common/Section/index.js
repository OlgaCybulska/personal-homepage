import { StyledSection, SectionHeader, Content } from "./styled";

const Section = ({ title, content }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <Content>{content}</Content>
  </StyledSection>
);

export default Section;
