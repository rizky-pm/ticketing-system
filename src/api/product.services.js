import axios from 'axios';
import { userToken } from '../constants';

export const getAllProducts = async () => {
  return axios
    .get('/products', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => {
      return response;
    });
};
