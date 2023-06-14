<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Nama"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.name }}
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
          Remove All
        </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Nippos:</strong></label> {{ currentTutorial.nippos }}
        </div>
        <div>
          <label><strong>Nama:</strong></label> {{ currentTutorial.name }}
        </div>
        <div>
          <!-- <label><strong>Status:</strong></label> {{ currentTutorial.office_id ? "Published" : "Pending" }} -->
          <label><strong>Office:</strong></label>
          {{ currentTutorial.office_id }}
        </div>
        <router-link
          :to="'/tutorials/' + currentTutorial.nippos"
          class="btn btn-sm btn-warning"
          >Edit</router-link
        >
        <button
          @click="removeData(currentTutorial.nippos)"
          class="ml-1 btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
        <TableGeneral />
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
// import TableGeneral from "../components/Table.vue";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  components: {
    // TableGeneral,
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    removeData(nippos) {
      var data = {
        nippos: nippos,
      };
      TutorialDataService.delete(data)
        .then((response) => {
          console.log(response);
          this.refreshList();
        })
        .catch((e) => {
          console.log("error :" + e.message);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
