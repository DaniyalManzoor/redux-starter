import store from "./customStore";
import * as actions from "./actions";

// import store from "./store";

// this function a store changes help us in Rerender
// const unsubscribe = store.subscribe(() => {
// console.log("Store Change", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));

// store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch(bugRemoved(1));

// console.log(store.getState());

// Create new Store

store.dispatch(actions.bugAdded("Bug 1"));
store.subscribe(() => {
  console.log("Store Changed!");
});
console.log(store.getState());
