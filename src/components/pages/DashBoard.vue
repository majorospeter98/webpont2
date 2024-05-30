<template>
  <div>
    <table class="table" @click="getUser">
      <thead>
        <tr>
          <th scope="col">Token</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ token }}</td>
          <td>Random János</td>
          <td>Random@gmail.com</td>
        </tr>
      </tbody>
    </table>
    <button @click="deleteUser">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      console.log(localStorage.getItem("users"));

      const token = JSON.parse(localStorage.getItem("users"));

      this.token = token.email;

      return token;
    },
    deleteUser() {
      localStorage.removeItem("users");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped></style>
