<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezKoder</router-link>
      <div v-if="storage">
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
      </div>
      <div v-else>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Test Login</router-link>
          </li>
        </div>
      </div>

    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      storage: localStorage.getItem("data-user")
    };
  },
  methods: {
    processLogout() {
      localStorage.clear()
      // this.$forceUpdate();
      window.location.href = 'login'

    }
  }
};
</script>