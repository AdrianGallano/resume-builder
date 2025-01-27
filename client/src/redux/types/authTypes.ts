export type AuthResponse = {
  access: string;
  refresh: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type SignUpRequest = {
  email: string;
  username: string;
  password: string;
};
export type SignUpResponse = {
  email: string;
  id: number;
  username: string;
};
export interface AuthState {
  username: string | null;
  email: string | null;
  id: number | null;
  token: string | null;
  refreshToken: string | null;
}

export type UserResponse = {
  username: string;
  email: string;
  id: number;
};
