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

const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};

export default logger;
