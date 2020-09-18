import configureStore from "./store/configureStore";

// import store from "./customStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

// * for all import is good practices only for small module

const store = configureStore();

store.dispatch(projectAdded({ name: "Project 1" }));

// this function a store changes help us in Rerender
// const unsubscribe = store.subscribe(() => {
// console.log("Store Change", store.getState());
// });

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

// store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch(bugRemoved(1));

// console.log(store.getState());

// --------------------------------------------
// Create new Store

// store.dispatch(actions.bugAdded("Bug 1"));
// store.subscribe(() => {
//   console.log("Store Changed!");
// });
// console.log(store.getState());
