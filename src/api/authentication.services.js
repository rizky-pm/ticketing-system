import axios from 'axios';

export const loginUser = async (payload) => {
  try {
    const res = await axios({
      url: '/login',
      method: 'POST',
      data: payload,
    });

    localStorage.setItem('user', JSON.stringify(res.data));

    return res;
  } catch (error) {
    return error;
  }
};
