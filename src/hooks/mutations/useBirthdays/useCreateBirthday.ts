import { useMutation } from '@tanstack/react-query';
import { BirthdayService } from '../../../api/service/birthdayService';
import { queryClient } from '../../../context/QueryProvider';
import { QUERY_KEYS } from '../../../constants/queryKeys';

export const useCreateBirthday = () => {
  return useMutation({
    mutationFn: BirthdayService.createBirthday,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BIRTHDAYS.GET_ALL_BIRTHDAYS],
      });
    },
  });
};
