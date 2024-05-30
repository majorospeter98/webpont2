<template>
  <div>
    <form @submit.prevent="formData">
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    formData() {
     let formData={
      token: 'assaasasasassa',
      email: this.email,
      password: this.password
     }
let teszt=localStorage.getItem("users")
let teszt2 =JSON.parse(teszt) ?? [] ;
teszt2.push(formData)
console.log(teszt2);
      localStorage.setItem("users", JSON.stringify(teszt2));

      this.$router.replace("/dashboard");
    },
  },
};
</script>

<style scoped></style>
