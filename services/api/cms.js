import axios from 'axios';

const axiosCms = axios.create({
  next: { revalidate: 60 * 10 },
  baseURL: process.env.CMS + '/items',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosCms.defaults.timeout = 10000;

// Add a response interceptor
axiosCms.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
// axiosCms.interceptors.request.use(function (config) {
//     const token = window?.localStorage?.getItem('access_token');
//     if (token) config.headers.Authorization = 'Bearer ' + token;
//     return config;
// });

export const fetcher = async (url) => {
  const reuslt = await axiosCms.get(url);
  return reuslt;
};

export default axiosCms;
