<template>
    <div class="container">
      <nav class="px-3 navbar navbar-expand navbar-dark bg-info">
        <router-link to="/" class="navbar-brand">CRUD Vue</router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add User</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
        </div>
      </nav>
    </div>
</template>
<script>

export default {
  name: "nav-users",
  data() {
    return {}
  }
} 
</script>