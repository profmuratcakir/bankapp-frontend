import axiosInstance from "./axiosInstance";

const BASE_URL = "http://localhost:8080";

class BankService {
  login(userInfo) {
    return axiosInstance.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axiosInstance.post(BASE_URL + "/auth/register", userInfo);
  }
  deposit(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/deposit", transactionInfo);
  }
  withdraw(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/withdraw", transactionInfo);
  }

  addRecipient(transactionInfo) {
    return axiosInstance.post(
      BASE_URL + "/account/addRecipient",
      transactionInfo
    );
  }

  transfer(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/transfer", transactionInfo);
  }

  getAllUsers() {
    return axiosInstance.get(BASE_URL + "/user/all");
  }

  deleteUser(id) {
    return axiosInstance.delete(BASE_URL + "/user/delete/" + id);
  }
}
export default new BankService();
