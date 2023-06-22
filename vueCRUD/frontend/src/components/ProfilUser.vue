<template>
  <div v-if="currentUser" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="nume">Nume</label>
        <input type="text" class="form-control" id="nume"
          v-model="currentUser.nume"
        />
      </div>
      <div class="form-group">
        <label for="prenume">Prenume</label>
        <input type="text" class="form-control" id="prenume"
          v-model="currentUser.prenume"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email"
          v-model="currentUser.email"
        />
      </div>
      
    </form>
    
    
    <button type="submit" class="btn btn-success ms-2 mt-2"
      v-on:click="updateUser"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>
<script>
import UserService from "../services/UserService";
export default {
  name: "profil-user",
  data() {
    return {
      currentUser: null,
      message: ''
    };
  },
  methods: {
    getUser(id) {
      UserService.get(id)
        .then(response => {
          this.currentUser = response.data['users'];
          console.log(response.data['users']);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentUser.id,
        title: this.currentUser.title,
        description: this.currentUser.description,
        published: status
      };
      UserService.update(this.currentUser.id, data)
        .then(response => {
          console.log(response.data);
          this.currentUser.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateUser() {
      UserService.update(this.currentUser.id, this.currentUser)
        .then(response => {
          console.log(response.data);
          this.message = 'The user was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
    
  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>