<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>

    <form>
      <div class="form-group">
        <label for="nippos">Nippos</label>
        <input
          type="text"
          class="form-control"
          id="nippos"
          v-model="currentTutorial.nippos"
          disabled
        />
      </div>
      <div class="form-group">
        <label for="name">Nama</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentTutorial.name"
        />
      </div>
      <div class="form-group">
        <label for="office">Office</label>
        <input
          type="text"
          class="form-control"
          id="office"
          v-model="currentTutorial.office_id"
          disabled
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.status == 1 ? "Aktif" : "Non-Aktif" }}
      </div>
    </form>

    <button
      class="badge badge-danger mr-2"
      v-if="currentTutorial.status == 1"
      @click="changeStatus(0)"
    >
      Non-Aktif
    </button>
    <button v-else class="badge badge-primary mr-2" @click="changeStatus(1)">
      Aktif
    </button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>

  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial-new",
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  methods: {
    getTutorial(id) {
      var data = {
        nippos: id,
      };
      TutorialDataService.get(data)
        .then((response) => {
          this.currentTutorial = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    changeStatus(status) {
      var data = {
        id: this.currentTutorial.id,
        status: status,
        name: this.currentTutorial.name,
      };
      TutorialDataService.update(data)
        .then((response) => {
          console.log(response.data);
          this.currentTutorial.status = status;
          this.message = response.data.message;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      var data = {
        id: this.currentTutorial.id,
        status: this.currentTutorial.status,
        name: this.currentTutorial.name,
      };
      TutorialDataService.update(data)
        .then((response) => {
          console.log(response);
          this.message = response.data.message;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      var data = {
        nippos: this.currentTutorial.nippos,
      };
      TutorialDataService.delete(data)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
