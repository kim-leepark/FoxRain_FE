import axios from 'axios';

// 종은 -> 1 / 승준 -> 2

export const getRequest = (number: number) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: number === 1 ? 'http://3.39.100.163:8081' : 'http://3.39.100.163:8082',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  number: number,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: number === 1 ? 'http://3.39.100.163:8081' : 'http://3.39.100.163:8082',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
