export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at?: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
