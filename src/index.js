import * as actions from "./actionType";

import store from "./store";

//this function a store changes help us in Rerender
const unsubscribe = store.subscribe(() => {
  console.log("Store Change", store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
