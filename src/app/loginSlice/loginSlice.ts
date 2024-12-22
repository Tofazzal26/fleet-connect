import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface LoginState {
  token: string;
  user: any;
}

const initialState: LoginState = {
  token: "",
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = loginSlice.actions;

export default loginSlice.reducer;
