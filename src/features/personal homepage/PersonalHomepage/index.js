import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectStatus,
  selectRepositories,
} from "./personalHomepageSlice";
import { Content } from "./Content";
import Heading from "./Heading";

const PersonalHomepage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <>
      <Heading />
      <Content status={status} repositories={repositories} />
    </>
  );
};
export default PersonalHomepage;
