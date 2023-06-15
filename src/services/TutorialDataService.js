import http from "../http-common";

class TutorialDataService {
  Login(data) {
    return http.withoutToken().post("/api/auth/signin", data);
  }
  getAll() {
    return http.withToken().post("/ayopatuh/user/userList");
  }

  // get(id) {
  //   return http.post("/ayopatuh/user/userProfileTes", id);
  // }

  // create(data) {
  //   return http.post("/ayopatuh/user/userInsertTes", data);
  // }

  // update(data) {
  //   return http.post("/ayopatuhuser/userUpdateTes", data);
  // }

  // delete(id) {
  //   return http.post("/ayopatuh/user/userDeleteTes", id);
  // }

  // deleteAll() {
  //   return http.delete(`/ayopatuh/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new TutorialDataService();