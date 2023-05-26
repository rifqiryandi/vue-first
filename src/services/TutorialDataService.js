import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.post("/user/userListTes");
  }

  get(id) {
    return http.post("/user/userProfileTes", id);
  }

  create(data) {
    return http.post("/user/userInsertTes", data);
  }

  update(data) {
    return http.post("user/userUpdateTes", data);
  }

  delete(id) {
    return http.post("/user/userDeleteTes", id);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();