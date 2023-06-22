<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by name"
            v-model="nameUser"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="searchName"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-sm-3"
        v-for="(user, index) in users" :key="index"
        @click="setActiveUser(user, index)"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ user.nume }} {{ user.prenume }}</h5>
            <p class="card-text">{{ user.id }}</p>
            <router-link
              :to="'/users/' + user.id"
              class="btn btn-outline-primary me-2 mt-2"
              >Edit</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";
export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      nameUser: "",
    };
  },
  methods: {
    retrieveUsers() {
      UserService.getAll()
        .then((response) => {
          this.users = response.data["users"];
          console.log(response.data["users"]);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteuser() {
      UserService.delete(this.currentUser.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "users" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },
    removeAllUsers() {
      UserService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchName() {
      UserService.findByName(this.nume)
        .then((response) => {
          this.users = response.data;
          this.setActiveUser(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>
<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>