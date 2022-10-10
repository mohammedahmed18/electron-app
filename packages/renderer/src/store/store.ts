import { configureStore, Store } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers/root";

const store: Store<RootState> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

export default store;
