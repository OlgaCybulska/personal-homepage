import Loading from "./Loading";

export const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "success":
      return <div>jest ok</div>;

    case "error":
      return <div>jest ok</div>;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
