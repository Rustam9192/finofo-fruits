import { configureStore } from "@reduxjs/toolkit";
import { fruitsApi } from "./features/fruits/fruitsApiSlice";
import fruitsSlice from "./features/fruits/fruitsSlice";

export const store = configureStore({
  reducer: {
    fruits: fruitsSlice,
    [fruitsApi.reducerPath]: fruitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fruitsApi.middleware),
});

// Types
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
