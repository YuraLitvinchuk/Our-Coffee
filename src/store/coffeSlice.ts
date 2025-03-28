import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoffeeItem } from "../types/coffeeItem";

interface ICoffeeState {
  filteredCoffeeList: ICoffeeItem[];
  search: string;
  filter: string;
}

const initialState: ICoffeeState = {
  filteredCoffeeList: [],
  search: "",
  filter: "all",
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = state.filter === action.payload ? "all" : action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { setSearch, setFilter } = coffeeSlice.actions;
