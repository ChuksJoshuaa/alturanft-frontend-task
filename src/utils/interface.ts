export interface IIProps {
  isLoading: boolean;
}

export interface AssetProps {
  address: string;
  asset_contract_type: string;
  buyer_fee_basis_points: number;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  external_link: string;
  image_url: string;
  name: string;
  nft_version: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  opensea_version: any;
  owner: any;
  payout_address: any;
  schema_name: string;
  seller_fee_basis_points: number;
  symbol: string;
}

export interface NFTProps {
  id: number;
  image_original_url: string;
  image_url: string;
  collection: any;
  image_preview_url: string;
  name: string;
  permalink: string;
  token_id: string;
  external_link: string;
  asset_contract: AssetProps;
  creator: any;
  traits: any;
}
