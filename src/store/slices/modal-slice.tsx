import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Rent } from "../../models/interface";

interface ModalState {
  isCreateModalShown: boolean;
  isUpdateModalShown: boolean;
  isDeleteModalShown: boolean;

  updateItemData: Rent;
  deleteItemId: string;
}

const initialState: ModalState = {
  isCreateModalShown: false,
  isUpdateModalShown: false,
  isDeleteModalShown: false,

  updateItemData: {
    id: "",
    year: 0,
    effectiveRent: 0,
    startingRent: 0,
  },
  deleteItemId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    create(state) {
      state.isCreateModalShown = true;
    },
    update(state, action: PayloadAction<Rent>) {
      state.updateItemData.id = action.payload.id;
      state.updateItemData.year = action.payload.year;
      state.updateItemData.effectiveRent = action.payload.effectiveRent;
      state.updateItemData.startingRent = action.payload.startingRent;
      state.isUpdateModalShown = true;
    },
    delete(state, action: PayloadAction<string>) {
      state.isDeleteModalShown = true;
      state.deleteItemId = action.payload;
    },
    close(state) {
      state.isCreateModalShown = false;
      state.isUpdateModalShown = false;
      state.isDeleteModalShown = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
