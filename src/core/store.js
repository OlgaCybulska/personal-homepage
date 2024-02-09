import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import personalHomepageReducer from "../features/personal homepage/PersonalHomepage/personalHomepageSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
