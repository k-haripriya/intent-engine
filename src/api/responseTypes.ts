export declare namespace ResponseTypes {
  export type LoginResponse = {
    tokens: {
      access: string;
      refresh: string;
    };
    user: {
      id: number;
      username: string;
      email: string;
    };
  };

  export type RegisterResponse = {
    tokens: {
      access: string;
      refresh: string;
    };
    user: {
      id: number;
      username: string;
      email: string;
    };
  };
}
