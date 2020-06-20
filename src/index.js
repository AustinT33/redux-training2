import { 
  configureStore, 
  getDefaultMiddleware,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

const loginSuccess = createAction("LOGIN_SUCCESS");
const loginFailed = createAction("LOGIN_FAILED");

const middleware = [
  ...getDefaultMiddleware()
];

const authState = {
  token: "",
  error: "",
};

const authReducer = createReducer(authState, {
  [loginSuccess]: (state, action) => {
    state.token = action.payload;
  },
  [loginFailed]: (state, action) => {
    state.error = action.payload;
  },
})

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});