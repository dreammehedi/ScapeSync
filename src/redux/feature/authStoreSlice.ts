import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { removeUserToken } from "../../utils/handleUserToken";
import type { UserData } from "../pages/auth/authSlice";

// Auth State Interface
interface AuthState {
  userData: UserData | null;
}

// Initial State
const initialState: AuthState = {
  userData: null,
};

// Create Slice
const authStoreSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeAuthData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    storeLogout: (state) => {
      state.userData = null;
      removeUserToken();
    },
  },
});

// Export Actions and Reducer
export const { storeAuthData, storeLogout } = authStoreSlice.actions;
export default authStoreSlice.reducer;
