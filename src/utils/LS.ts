export default {
  getAuthToken() {
    return localStorage.getItem('token');
  },
  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  },
  removeAuthToken() {
    localStorage.removeItem('token');
  },
};
