import { useQuery } from '@tanstack/react-query';
import { BirthdayService } from '../../api/service/birthdayService';
import { QUERY_KEYS } from '../../constants/queryKeys';

export const useBirthdays = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BIRTHDAYS.GET_ALL_BIRTHDAYS],
    queryFn: BirthdayService.getAllBirthdayList,
  });
};
