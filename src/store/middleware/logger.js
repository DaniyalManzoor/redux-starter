// MIDDLEWARE
// middleware is a pice of code that get executed
// after action is dispatch and before it reach to
// the root reducer. it seat in middle.

// -- Calling APIS
// -- Error reporting
// -- Analytics
// -- Authorization

// Create middleware from sketch
// using curring

// SNA like DNA haha for memorizing

const logger = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("next", next);
  console.log("action", action);
};

export default logger;
