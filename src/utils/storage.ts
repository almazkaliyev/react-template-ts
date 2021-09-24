const storage = {
  getToken: (): string => window.localStorage.getItem('token') as string,
  setToken: (token: string): void => {
    window.localStorage.setItem('token', token);
  },
  clearToken: (): void => {
    window.localStorage.removeItem('token');
  },
};

export default storage;
