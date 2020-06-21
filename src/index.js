import { 
  configureStore, 
  getDefaultMiddleware,
  createSlice,
} from "@reduxjs/toolkit";

const middleware = [
  ...getDefaultMiddleware()
];

const authState = {
  token: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

const getUsers = createAsyncThunk("users/getUsers", () => {
  return fetch("api/users")
    .then(res => {
      if(!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(json => json);
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: "",
    error: "",
    data: [],
  },
  reducers: {
    //regular reducers
  },
  extraReducers: {
    [getUsers.pending]: state => {
      state.loading = "yes";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = "";
      state.data = action.payload;
    }
  }
});

const { loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});