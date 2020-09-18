// Duck Design Patterns
// -- move into store folder
// -- move Action types, Action Creator, reducer in single file
// -- action creator is always export
// -- reducer is always default export

import { createAction } from "@reduxjs/toolkit";

// Action Creator

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducers
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          desciprtion: action.payload.desciprtion,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

//
