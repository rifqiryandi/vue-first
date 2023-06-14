<style>
.block-login {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}

.block-design {
  width: 100%;
  height: 100vh;
  background-image: url("./assets/bgakhlak.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.form-login {
  align-content: center;
}

.form-login input {
  width: 80%;
  margin-left: 10%;
}

.form-login label {
  margin-left: 10%;

}

.icon {
  margin-top: 20%;
  margin-left: 10%;
  background-image: url("./assets/logo.png");
  width: 40%;
  height: 40%;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
<template>
  <div id="app">
    <div v-if="!storage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-12 p-0">
            <div class="block-design">

            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12">
            <div class="block-login">
              <div class="row mb-1" style="height: 45%;">
                <div class="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                  <div class="icon">

                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-login col-lg-12 col-md-12 col-12">
                  <div class="row">
                    <div class="col-12">
                      <label class="form-label">Nippos</label>
                      <input type="text" class="form-control" v-model="user.nippos">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" v-model="user.password">
                    </div>
                  </div>
                  <div class="mt-3">
                    <button type="submit" class="btn btn-primary" @click="processLogin"
                      style="margin-left: 10%;">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">bezKoder</router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="processLogout" style="cursor: pointer;">Logout</a>
          </li>
        </div>
      </nav>
      <div class="container-fluid mt-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from './services/TutorialDataService';
export default {
  name: "app",
  data() {
    return {
      storage: sessionStorage.getItem("data-user"),
      user: {
        nippos: null,
        password: ""
      },
      loginIs: false,
      msg: "",
      DataUser: ""
    };
  },
  methods: {
    processLogout() {
      localStorage.clear()
      sessionStorage.clear()
      window.location.href = 'login'
    },
    processLogin() {
      var data = {
        nippos: this.user.nippos
      }
      localStorage.clear()
      TutorialDataService.get(data).then(response => {
        var resData = response.data.data
        sessionStorage.setItem("data-user", JSON.stringify(resData))
        window.location.href = 'tutorials'

        // var userData = JSON.parse(sessionStorage.getItem("data-user"))
        // if (resData.name == this.user.nama) {
        //   data.name = resData.name
        //   // localStorage.setItem("data-user", JSON.stringify(data))

        //   // console.log(userData);
        //   // this.msg = "Berhasil"
        //   // this.loginIs = true
        //   // this.DataUser = "Nippos : " + userData.nippos + " Name : " + userData.name

        // } else {
        //   this.msg = "Gagal"
        // }
      }).catch(e => {
        console.log(e);
      })
    }
  }
};
</script>