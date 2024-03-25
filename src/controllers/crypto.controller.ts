import config from '../config';
import catchAsync from '../utils/catchAsync';
import axios from 'axios';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

// Controller to fetch the top 20 cryptocurrencies with positive 24h change
const fetchTopPerformingCryptos = catchAsync(async (req, res) => {
  // Fetch the first 100 listings from CoinMarketCap API
  const response = await axios.get(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD',
    {
      headers: {
        'X-CMC_PRO_API_KEY': config.cmcApiKey, // Provide CoinMarketCap API key
      },
    },
  );

  // Filter cryptocurrencies with positive 24h change
  const positiveData = response?.data?.data.filter(
    (item) => item?.quote?.USD?.percent_change_24h > 0,
  );

  // Sort filtered data by 24h change in descending order
  const sortedData = positiveData.sort(
    (a, b) =>
      b?.quote?.USD?.percent_change_24h - a?.quote?.USD?.percent_change_24h,
  );

  // Get the top 20 cryptocurrencies with positive 24h change
  const top20Cryptos = sortedData.slice(0, 20);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Top 20 cryptos with positive 24h change fetched.',
    data: top20Cryptos,
  });
});

// Controller to fetch the latest 100 cryptocurrencies with positive 24h change
const fetchLatestPositiveCryptos = catchAsync(async (req, res) => {
  // Fetch a small set of listings to access the metadata for total count
  const metadataResponse = await axios.get(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=1&convert=USD',
    {
      headers: {
        'X-CMC_PRO_API_KEY': config.cmcApiKey, // Provide CoinMarketCap API key
      },
    },
  );

  // Get the total count of cryptocurrencies from the metadata
  const totalCount = metadataResponse.data.status.total_count;

  // Specify the number of items to fetch (last 100 in this case)
  const itemsToFetch = 100;

  // Calculate the starting point for fetching
  const start = Math.max(totalCount - itemsToFetch + 1, 1);

  // Fetch the last 100 listings with positive 24h change
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${itemsToFetch}&convert=USD`,
    {
      headers: {
        'X-CMC_PRO_API_KEY': config.cmcApiKey, // Provide CoinMarketCap API key
      },
    },
  );

  // Filter cryptocurrencies with positive 24h change
  const positiveData = response?.data?.data.filter(
    (item) => item?.quote?.USD?.percent_change_24h > 0,
  );

  // Sort filtered data by 24h change in descending order
  const sortedData = positiveData.sort(
    (a, b) =>
      b?.quote?.USD?.percent_change_24h - a?.quote?.USD?.percent_change_24h,
  );

  // Get the top 20 cryptocurrencies with positive 24h change
  const top20Cryptos = sortedData.slice(0, 20);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Latest 20 cryptos with positive 24h change fetched.',
    data: top20Cryptos,
  });
});

export const CryptoControllers = {
  fetchTopPerformingCryptos,
  fetchLatestPositiveCryptos,
};
