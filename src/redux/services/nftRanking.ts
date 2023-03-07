import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openSeaApi = createApi({
  reducerPath: "openSeaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_OPEN_SEA_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_OPEN_SEA_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () =>
        `/assets?collection_slug=cryptopunks&order_direction=desc&limit=50&include_orders=false`,
    }),
    getSingleAsset: builder.query({
      query: ({ asset_contract_address, token_id }) =>
        `/asset/${asset_contract_address}/${token_id}?include_orders=false`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetSingleAssetQuery } = openSeaApi;
