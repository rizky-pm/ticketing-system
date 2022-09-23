import axios from 'axios';
import { userToken } from '../constants';

export const getAllTickets = async () => {
  return axios
    .get('/tickets', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response);
};
