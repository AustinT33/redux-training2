import { 
  configureStore, 
  getDefaultMiddleware,
  createAction,
} from "@reduxjs/toolkit";

const loginSuccess = createAction("LOGIN_SUCCESS");
const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
const fetchLinksSUccess = createAction("FETCH_LINKS_SUCCESS");

const middleware = [
  ...getDefaultMiddleware()
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