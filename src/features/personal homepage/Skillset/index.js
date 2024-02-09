import List from "../../../common/List";
import Section from "../../../common/Section";
import { skillSetTable } from "./skillSetTable";

function Skillset() {
  return (
    <Section
      title="My skillset includes 🛠️"
      list={<List skills={skillSetTable} />}
    />
  );
}

export default Skillset;
