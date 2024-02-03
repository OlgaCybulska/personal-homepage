import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personal homepage/PersonalHomepage/personalHomepageSaga";

export default function* rootSaga() {
  yield all([personalHomepageSaga()]);
}
