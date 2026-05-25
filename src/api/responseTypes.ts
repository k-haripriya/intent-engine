export interface CommonResponse {
  code?: number;
  responseCode?: number;
  responseMessage?: string | null;
  status?: number;
  data?: any | null;
  errorMsg?: string;
  str?: string;
  token?: string;
  caseFlag?: string;
  message?: string;
}
export declare namespace ResponseTypes {
  export interface LoginResponse extends CommonResponse {
    tokens: {
      access: string;
      refresh: string;
    };
    user: {
      id: number;
      username: string;
      email: string;
    };
  }

  export interface RegisterResponse extends CommonResponse {
    tokens: {
      access: string;
      refresh: string;
    };
    user: {
      id: number;
      username: string;
      email: string;
    };
  }

  export interface Birthday extends CommonResponse {
    data: BirthdayData[];
  }

  export interface createBirthday extends CommonResponse {
    data: BirthdayData;
  }
}

export interface BirthdayData {
  id: number;
  name: string;
  dob: string;
  phone_number: string;
  notes: string;
  profile_photo: string;
  relationship: string;
  reminder_time: string;
  days_remaining: number;
  created_at: string;
  updated_at: string;
}
