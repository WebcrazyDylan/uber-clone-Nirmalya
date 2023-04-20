import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface NavState {
  origin: number;
  destination: number;
  travelTimeInformation: number;
}

const initialState: NavState = {
  origin: 0,
  destination: 0,
  travelTimeInformation: 0,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<number>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<number>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<number>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
