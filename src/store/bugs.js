import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

// Duck Design Patterns
// -- move into store folder
// -- move Action types, Action Creator, reducer in single file
// -- action creator is always export
// -- reducer is always default export

const slice = createSlice({
  name: "bugs",
  initialState: { list: [], loading: false, lastFetch: null },

  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsRecieved: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
  },
});

export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugsRecieved,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators

const url = "./bugs";
// () => fn(dispatch getState)
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  console.log(lastFetch);

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsRecieved.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

//Selector Function
//take state return computed state

// memoization or memoisation is an optimization technique
// used primarily to speed up computer programs by storing
// the results of expensive function calls and returning the
// cached result when the same inputs occur again

// bugs => getunsolved bugs from the cache
// f(x) => y {input: x output: y}
// install reselect for implementing

export const selectUnresolvedBugs = createSelector(
  // we can also pass multiple selector
  //state => state.entities.projects
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved) //(bugs, project)
);

export const selectBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
