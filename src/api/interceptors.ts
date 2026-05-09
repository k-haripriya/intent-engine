import { apiClient } from './client';
import { logRequest, logResponse, logError } from './logger';

apiClient.interceptors.request.use(
  config => {
    logRequest(config);
    return config;
  },
  error => {
    logError(error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    logResponse(response);
    return response;
  },
  error => {
    logError(error);
    return Promise.reject(error);
  },
);
