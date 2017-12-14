import axios from 'axios';
import { constants } from '../constants/api';

const API_CONSTANTS = new constants.API().getApiConstants();

export function getAccounts() {
  const p = new Promise((res, rej) => {
    axios.get(`${API_CONSTANTS.base}:${API_CONSTANTS.port}/${API_CONSTANTS.API.GETACCOUNTS}`).then((response) => {
      res(response);
    });
  });

  return p;
}

export async function getDayStats(id: string) {
  const btcStats = await getDailyStats('BTC-USD');
  const ethStats = await getDailyStats('ETH-USD');
  const ltcStats = await getDailyStats('LTC-USD');
  return [btcStats, ethStats, ltcStats];
}

async function getDailyStats(id: string) {
  const p = new Promise((res, rej) => {
    axios.get(`https://api.gdax.com/products/${id}/stats`).then((response) => {
      res(response.data);
    });
  });
  return p;
}
