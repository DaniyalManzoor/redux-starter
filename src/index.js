import configureStore from "./store/configureStore";

// import store from "./customStore";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  selectUnresolvedBugs,
  selectBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

// * for all import is good practices only for small module

const store = configureStore();
store.dispatch(userAdded({ name: "user 1" }));
store.dispatch(userAdded({ name: "user 2" }));
store.dispatch(userAdded({ name: "user 3" }));

store.dispatch(projectAdded({ name: "Project 1" }));

// this function a store changes help us in Rerender
// const unsubscribe = store.subscribe(() => {
// console.log("Store Change", store.getState());
// });

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 2 }));
store.dispatch(bugResolved({ id: 1 }));

const bugs = selectBugsByUser(2)(store.getState());
console.log(bugs);

// const x = selectUnresolvedBugs(store.getState());
// const y = selectUnresolvedBugs(store.getState());
// console.log(x === y);

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
