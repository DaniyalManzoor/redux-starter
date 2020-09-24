import configureStore from "./store/configureStore";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(
  actions.apiCallBegen({
    url: "/bugs",
    onSuccess: "bugsRecieved",
  })
);
