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
//to get reference of this store we pass reference
store.dispatch((dispatch, getState) => {
  // Call an API
  // When the promise is resolved => dispatch() --> result
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
  //If the promise is rejected => dispatch() --> error
});
