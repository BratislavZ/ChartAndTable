import { configureStore } from "@reduxjs/toolkit";

import rentReducer from "./slices/rent-slice";
import uiReducer from "./slices/ui-slice";
import modalReducer from "./slices/modal-slice";

const store = configureStore({
  reducer: {
    rent: rentReducer,
    ui: uiReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
