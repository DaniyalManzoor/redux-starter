import store from "./store";

//this function a store changes help us in Rerender
const unsubscribe = store.subscribe(() => {
  console.log("Store Change", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
