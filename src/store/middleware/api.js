import axios from "axios";

const action = {
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsRecieved",
    onError: "apiCallFailed",
  },
};

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") return next(action);

  const { url, method, data, onSuccess, onError } = action.payload;
  //calling api
  try {
    const response = await axios.request({
      baseURL: "http://localhost:t9001/api",
      url,
      method,
      data,
    });
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: onError, payload: error });
  }
};
export default api;
