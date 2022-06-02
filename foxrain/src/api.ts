import axios from 'axios';

// 종은 -> .method('1/endpoint');
// 승준 -> .method('2/endpoint');

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://3.39.100.163:808',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://3.39.100.163:808',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
