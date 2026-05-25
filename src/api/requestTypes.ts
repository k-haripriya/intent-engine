export declare namespace RequestTypes {
  interface LoginRequest {
    email: string;
    password: string;
  }

  interface RegisterRequest {
    email: string;
    password: string;
    username: string;
  }

  interface CreateBirthdayRequest {
    name: string;
    dob: string;
    phone_number: string;
    notes: string;
    profile_photo: string;
    relationship: string;
    reminder_time: string;
  }
}
