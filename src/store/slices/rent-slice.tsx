import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Rent } from "../../models/interface";

interface RentState {
  rentData: Rent[];
}

const initialState: RentState = {
  rentData: [],
};

const rentSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadRentData(state, action: PayloadAction<Rent[]>) {
      state.rentData = action.payload;
      state.rentData.sort((a, b) => a.year - b.year);
    },
    addItem(state, action: PayloadAction<Rent>) {
      const newItem = action.payload;
      state.rentData.push({
        id: newItem.id,
        year: Number(newItem.year),
        effectiveRent: Number(newItem.effectiveRent),
        startingRent: Number(newItem.startingRent),
      });
      state.rentData.sort((a, b) => a.year - b.year);
    },
    updateItem(state, action: PayloadAction<Rent>) {
      const existingItem = state.rentData.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.year = action.payload.year
        existingItem.effectiveRent = action.payload.effectiveRent
        existingItem.startingRent = action.payload.startingRent
      }
      state.rentData.sort((a, b) => a.year - b.year);
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.rentData = state.rentData.filter((item) => item.id !== id);
      state.rentData.sort((a, b) => a.year - b.year);
    },
  },
});

export const rentActions = rentSlice.actions;
export default rentSlice.reducer;
