// Duck Design Patterns
// -- move into store folder
// -- move Action types, Action Creator, reducer in single file
// -- action creator is always export
// -- reducer is always default export

import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creator

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducers
let lastId = 0;

export default createReducer([], {
  // key : value
  // action: function (event => event handler)

  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      desciprtion: action.payload.desciprtion,
      resolved: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug = bug.id === action.payload.id));
    bugs[index].resolved = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
