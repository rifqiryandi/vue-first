<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="nippos">Nippos</label>
          <input
            type="text"
            class="form-control"
            id="nippos"
            required
            v-model="user.nippos"
            name="nippos"
          />
        </div>
  
        <div class="form-group">
          <label for="name">Nama</label>
          <input
            class="form-control"
            id="name"
            required
            v-model="user.name"
            name="name"
          />
        </div>

        <div class="form-group">
          <label for="office">Kantor</label>
          <input
            class="form-control"
            id="office"
            required
            v-model="user.office"
            name="office"
          />
        </div>
        <button @click="saveproses" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newTutorial">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import TutorialDataService from "../services/TutorialDataService";
  
  export default {
    name: "add-tutorial",
    data() {
      return {
        user: {
          id: null,
          nippos: "",
          name: "",
          office_id:null
        },
        submitted: false,
        storage: localStorage.getItem("data-user")
      };
    },
    methods: {
      saveproses() {
        var data = {
          nippos: this.user.nippos,
          name: this.user.name,
          office_id: this.user.office
        };
        console.log(data);
        TutorialDataService.create(data)
          .then(response => {
            // this.tutorial.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newTutorial() {
        this.submitted = false;
        this.tutorial = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>