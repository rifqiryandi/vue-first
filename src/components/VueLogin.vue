<template>
    <div class="form-login">
        <div v-if="!loginIs">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6 ">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nippos</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter Nippos"
                            v-model="user.nippos">
                    </div>
                </div>

            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6 ">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Nama"
                            v-model="user.name">
                    </div>
                </div>

            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-6 p-0 d-flex justify-content-center">
                    <button @click="processLogin" class="btn btn-success ">Login</button>
                    <label>{{ msg }}</label>
                </div>
                <div class="col-lg-6 p-0 d-flex justify-content-center">
                    <button @click="processLogout" class="btn btn-success ">Logout</button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-3">
                    <label>{{ msg }}</label>

                </div>
                <div class="col-3">
                    <label> {{ DataUser }}</label>

                </div>
            </div>
        </div>
    </div>
</template>

<script >
import TutorialDataService from '../services/TutorialDataService';
export default {
    name: "loginView",
    data() {
        return {
            user: {
                nippos: null,
                name: ""
            },
            loginIs: false,
            msg: "",
            DataUser: ""
        }
    },
    methods: {
        processLogin() {
            var data = {
                nippos: this.user.nippos
            }
            localStorage.clear()
            TutorialDataService.get(data).then(response => {
                var resData = response.data.data
                if (resData.name == this.user.name) {
                    data.name = resData.name
                    localStorage.setItem("data-user", JSON.stringify(data))
                    var userData = JSON.parse(localStorage.getItem("data-user"))
                    console.log(userData);
                    this.msg = "Berhasil"
                    this.loginIs = true
                    this.DataUser = "Nippos : " + userData.nippos + " Name : " + userData.name
                    // location.reload()
                    window.location.href = 'tutorials'

                } else {
                    this.msg = "Gagal"
                }
            }).catch(e => {
                console.log(e);
            })
        },
        processLogout() {
            localStorage.clear()
            location.reload()

        }
    },
};
</script>

<style>
.form-loginh {
    max-width: 300px;
    margin: auto;
}
</style>