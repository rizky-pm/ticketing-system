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

export const getTicketById = async (id) => {
  try {
    const response = await axios.get(`/tickets/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};
