<template>
  <div>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="form-group text">
              Full Name :
              <input
                type="text"
                class="form-control"
                placeholder="Enter full name"
                v-model="name"
              />
            </div>

            <div class="form-group text">
              Phone Number :
              <input
                type="text"
                class="form-control"
                placeholder="Enter phone number"
                v-model="phone"
              />
            </div>

            <div class="form-group text">
              User Name :
              <input
                type="text"
                class="form-control"
                placeholder="Enter user name"
                v-model="userName"
              />
            </div>

            <div class="form-group password">
              Password :
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                v-model="password"
              />
            </div>

            <button class="btn btn-primary " @click="upToFirebase()">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      name: "",
      phone: "",
      userName: "",
      password: "",
    };
  },
  methods: {
   upToFirebase() {
      var info = {
        name: this.name,
        phone: this.phone,
        userName: this.userName,
        password: this.password,
      };
      db.collection("Input").doc().set(info)
        .then(function() {
          console.log("Succes");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
