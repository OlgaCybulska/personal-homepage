import Loading from "./Loading";
import Error from "./Error";
import Repositories from "./Repositories";

export const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "success":
      return <Repositories repositories={repositories} />;

    case "error":
      return <Error />;
  }
};
