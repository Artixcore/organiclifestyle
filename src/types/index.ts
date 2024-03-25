export interface ICryptoListing {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  platform: IPlatform;
  infinite_supply: boolean;
  cmc_rank: number;
  self_reported_circulating_supply: number;
  self_reported_market_cap: number;
  tvl_ratio: number | null;
  last_updated: string;
  quote: IQuote;
}

interface IPlatform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

interface IQuote {
  USD: IUSDQuote;
}

interface IUSDQuote {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  tvl: number | null;
  last_updated: string;
}
