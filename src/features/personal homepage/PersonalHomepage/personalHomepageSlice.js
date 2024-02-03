import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: (state) => {
      state.status = "loading";
    },

    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.repositories = repositories;
      state.status = "success";
    },
    fetchRepositoriesError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) =>
  selectPersonalHomepageState(state).repositories;

export const selectStatus = (state) =>
  selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
