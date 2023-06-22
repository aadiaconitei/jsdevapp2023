<template>
  <div class="list row">
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
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.nume }}
        </li>
      </ul>
      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentUser">
        <h4>User</h4>
        <div>
          <label><strong>Nume:</strong></label> {{ currentUser.nume }}
        </div>
        <div>
          <label><strong>Prenume:</strong></label> {{ currentUser.prenume }}
        </div>

        <router-link
          :to="'/users/' + currentUser.id"
          class="btn btn-outline-primary me-2 mt-2"
          >Edit</router-link
        >
        <button class="btn btn-danger me-2 mt-2" @click="deleteUser">
          Delete
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a user...</p>
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
    deleteUser() {
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
      UserService.findByName(this.nameUser)
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
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>