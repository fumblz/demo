import { combineReducers } from "redux";

const initState = {};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
