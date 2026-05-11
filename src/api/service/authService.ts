import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';
import { RequestTypes } from '../requestTypes';
import { ResponseTypes } from '../responseTypes';

const login = async (
  data: RequestTypes.LoginRequest,
): Promise<ResponseTypes.LoginResponse> => {
  const response = await apiClient.post<ResponseTypes.LoginResponse>(
    ENDPOINTS.AUTH.LOGIN,
    data,
  );
  return response.data;
};

const register = async (
  data: RequestTypes.RegisterRequest,
): Promise<ResponseTypes.RegisterResponse> => {
  const response = await apiClient.post<ResponseTypes.RegisterResponse>(
    ENDPOINTS.AUTH.REGISTER,
    data,
  );
  return response.data;
};

export const AuthService = {
  login,
  register,
};
