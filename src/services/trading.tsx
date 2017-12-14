import axios from 'axios';
import {constants} from '../constants/api';

const API_CONSTANTS = new constants.API().getApiConstants();

export function getAccounts() {
  const p = new Promise((res, rej) => {
    axios.get(`${API_CONSTANTS.base}:${API_CONSTANTS.port}/${API_CONSTANTS.API.GETACCOUNTS}`).then((response) => {
      res(response);
    });
  });

  return p;
}
