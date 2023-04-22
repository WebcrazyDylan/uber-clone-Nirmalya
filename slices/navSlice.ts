import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface NavState {
  origin: {
    location: { lat: number; lng: number };
    description: string;
  } | null;
  destination: {
    location: { lat: number; lng: number };
    description: string;
  } | null;
  travelTimeInformation: {
    distance: {
      text: string;
      value: number;
    };
    duration: {
      text: string;
      value: number;
    };
    status: string;
  } | null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    }
  }
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
