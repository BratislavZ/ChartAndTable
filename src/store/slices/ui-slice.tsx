import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isLoading: boolean | null;
  isLoaded: boolean;
  loadingMessage: string;

  isSending: boolean | null;
  isSent: boolean;
  sendingMessage: string;
}

const initialState: UIState = {
  isLoading: null,
  isLoaded: false,
  loadingMessage: "",

  isSending: null,
  isSent: false,
  sendingMessage: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startedFetching(state) {
      state.isLoading = true;
      state.isLoaded = false;
    },
    successfulFetching(state) {
      state.isLoading = false;
      state.isLoaded = true;
    },
    errorFetching(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isLoaded = false;
      state.loadingMessage = action.payload;
    },
    startedSending(state) {
      state.isSending = true;
      state.sendingMessage = "";
    },
    successfulSending(state, action: PayloadAction<string>) {
      state.isSending = false;
      state.sendingMessage = action.payload;
    },
    errorSending(state, action: PayloadAction<string>) {
      state.isSending = false;
      state.sendingMessage = action.payload;
    },
    resetSendingMessage(state) {
      state.sendingMessage = "";
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
