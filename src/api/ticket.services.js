import axios from 'axios';
import { userToken } from '../constants';

export const getAllTickets = async () => {
  try {
    const res = await axios({
      url: '/tickets/',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};
