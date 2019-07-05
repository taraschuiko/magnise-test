<template>
  <div class="AddStudent">
    <input type="text" placeholder="First Name" v-model="firstName" @keyup.enter="addStudent">
    <input type="text" placeholder="Last Name" v-model="lastName" @keyup.enter="addStudent">
    <input type="number" min="0" placeholder="Age" v-model="age" @keyup.enter="addStudent">
    <button @click="addStudent">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddStudent",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: 0
    }
  },
  methods: {
    addStudent() {
      if (this.firstName && this.lastName) {
        this.$store.dispatch("addStudent", {
          first_name: this.firstName,
          last_name: this.lastName,
          age: this.age
        })
        this.firstName = ""
        this.lastName = ""
        this.age = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.AddStudent {
  margin-bottom: 20px;

  input {
    margin-right: 5px;
  }
}
</style>
