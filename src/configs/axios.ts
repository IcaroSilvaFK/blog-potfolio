import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const api = axios.create({
  baseURL: 'https://dev.to/api/',
});

// api.interceptors.request.use((config) => {
//   config.headers = {
//     'api-key': apiKey as string,
//   };

//   return config;
// });
