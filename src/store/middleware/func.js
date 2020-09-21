// Thunk / func
const func = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") action(dispatch, getState);
  else next(action);
};
export default func;

// redux has it own thunk / func
//with out Redux toolkit download thunk
// npm i redux-thunk
