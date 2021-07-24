import axiosInstance from "./axiosInstance";

const BASE_URL = "http://localhost:8080";

class BankService {
  login(userInfo) {
    return axiosInstance.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axiosInstance.post(BASE_URL + "/auth/register", userInfo);
  }
}
export default new BankService();
