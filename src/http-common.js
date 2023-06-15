import axios from "axios";

class http {
  withoutToken() {
    return axios.create({
      baseURL: process.env.VUE_APP_URL,
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  withToken() {
    var token = JSON.parse(sessionStorage.getItem("access-token"))
    return axios.create({
      baseURL: process.env.VUE_APP_URL,
      headers: {
        'x-access-token': token
      }
    });
  }
}
export default new http()