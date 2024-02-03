import { delay, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} from "./personalHomepageSlice";
import { getRepositoriesFromApi } from "../getRespositories";

function* fetchRepositoriesFromApiHandler() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositoriesFromApi);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesFromApiHandler);
}
