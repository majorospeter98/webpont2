<template>
  <div>
    <label for="languages">Choose a language:</label>
    <header>
      <select name="cars" id="cars">
        <option value="hu">Hungary</option>
        <option value="en">English</option>
      </select>
    </header>
    <router-link to="/login">Login</router-link>
    <router-link :to="isUser ? '/dashboard' : '/'">DashBoard</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    isUser() {
      let teszt = localStorage.getItem("users");

      return !!teszt;
    },
  },
};
</script>

<style scoped>
.disabled {
  color: red;
}
</style>
