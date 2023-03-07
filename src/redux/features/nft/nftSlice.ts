import { createSlice } from "@reduxjs/toolkit";
import { IIProps } from "../../../utils/interface";

const initialState: IIProps = {
  isLoading: true,
};

export const nftSlice = createSlice({
  name: "nft",

  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoader } = nftSlice.actions;

export default nftSlice.reducer;
