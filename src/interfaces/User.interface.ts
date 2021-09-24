export interface LoginData {
  login: string;
  password: string;
}

export interface UserFromServer {
  id: number;
  login: string;
  name: null | string;
  created_at: string;
  updated_at: string;
}

export interface User extends Pick<UserFromServer, 'id' | 'login'> {
  name: string;
  createdAt: string;
  updatedAt: string;
}
