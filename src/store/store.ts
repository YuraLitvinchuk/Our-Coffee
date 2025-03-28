import { configureStore } from "@reduxjs/toolkit";

import { coffeeApi } from "../api/apiSlice";
import coffeeReducer from "../store/coffeSlice";

const store = configureStore({
  reducer: {
    [coffeeApi.reducerPath]: coffeeApi.reducer,
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coffeeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
