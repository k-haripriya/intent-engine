import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';
import { RequestTypes } from '../requestTypes';
import { ResponseTypes } from '../responseTypes';

const getAllBirthdayList = async (): Promise<ResponseTypes.Birthday> => {
  const response = await apiClient.get<ResponseTypes.Birthday>(
    ENDPOINTS.BIRTHDAYS.GET_ALL_BIRTHDAYS,
  );
  console.log(response);
  return response.data;
};

const createBirthday = async (
  request: RequestTypes.CreateBirthdayRequest,
): Promise<ResponseTypes.Birthday> => {
  const response = await apiClient.post<ResponseTypes.Birthday>(
    ENDPOINTS.BIRTHDAYS.CREATE_BIRTHDAY,
    request,
  );
  console.log(response);
  return response.data;
};

export const BirthdayService = {
  getAllBirthdayList,
  createBirthday,
};
