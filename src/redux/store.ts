import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./features/nft/nftSlice";
import { openSeaApi } from "./services/nftRanking";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [openSeaApi.reducerPath]: openSeaApi.reducer,
    nft: nftReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openSeaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
