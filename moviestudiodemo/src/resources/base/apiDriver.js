import axios from 'axios';
export const callApi = async (url, options = {}, customHeaders = {}) => {
  return axios.request({
    url,
    headers: {
      ...customHeaders,
    },
    ...options,
  });
};
