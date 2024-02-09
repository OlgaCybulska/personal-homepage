import List from "../../../common/List";
import Section from "../../../common/Section";
import { wantToLearn } from "./wantoToLearnTable";

function WantToLearn() {
  return (
    <Section
      title="What I want to learn next 🚀"
      list={<List skills={wantToLearn} />}
    />
  );
}

export default WantToLearn;
