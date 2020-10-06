import configureStore from "./store/configureStore";
import { addBug } from "./store/bugs";

const store = configureStore();

store.dispatch(addBug({ description: "a" }));
store.dispatch(addBug({ description: "b" }));
