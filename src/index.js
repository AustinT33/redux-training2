import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = [

];

const authState = {
  token: "",
};

function authReducer(state = authState, action) {
  //code here
  return state;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});