import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
// Duck Design Patterns
// -- move into store folder
// -- move Action types, Action Creator, reducer in single file
// -- action creator is always export
// -- reducer is always default export

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        desciprtion: action.payload.id,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

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
