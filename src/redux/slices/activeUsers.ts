/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModelInterface } from "../../interfaces/models/user";

interface InitialState {
  activeUsersList: UserModelInterface[];
}

const initialState: InitialState = {
  activeUsersList: [],
};

export const activeUsers = createSlice({
  name: "activeUsers",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<UserModelInterface>) => {
      state.activeUsersList.unshift(action.payload);
    },
    removeUserFromActiveTable: (state, action: PayloadAction<string>) => {
      state.activeUsersList = state.activeUsersList.filter(
        (user) => user.id !== action.payload,
      );
    },
  },
});

export const { setActiveUser, removeUserFromActiveTable } = activeUsers.actions;

export default activeUsers.reducer;
