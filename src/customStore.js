import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function dispatch(action) {
    // happend in dispatch
    // call our reducer to get a new state
    // Nofity the subscribers
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}
export default createStore(reducer);
