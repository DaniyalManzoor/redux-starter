import * as actions from "./actionType";
//[]

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          desciprtion: action.payload.desciprtion,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
