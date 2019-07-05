<template>
  <div class="list__item">
    <p>First name: {{student.first_name}}</p>
    <p>Last name: {{student.last_name}}</p>
    <p>Age: {{student.age}}</p>
    <router-link :to="`/student-detail/${student.id}`">
      <button>Details</button>
    </router-link>
    <button @click="toggleEditing">Edit</button>
    <button @click="deleteStudent">Delete</button>
    <div v-if="isEditing">
      <input type="text" placeholder="First Name" @keyup.enter="updateStudent" v-model="firstName" />
      <input type="text" placeholder="Last Name" @keyup.enter="updateStudent" v-model="lastName" />
      <input type="number" placeholder="Age" @keyup.enter="updateStudent" v-model="age" />
      <button @click="updateStudent">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentsListItem",
  data() {
    return {
      isEditing: false,
      firstName: this.student.first_name,
      lastName: this.student.last_name,
      age: this.student.age
    };
  },
  props: {
    student: Object
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
    updateStudent() {
      if (this.firstName && this.lastName) {
        this.$store.dispatch("updateStudent", {
          id: this.student.id,
          student: {
            first_name: this.firstName,
            last_name: this.lastName,
            age: this.age
          }
        });
      }
      this.isEditing = false;
    },
    deleteStudent() {
      this.$store.dispatch("deleteStudent", this.student.id)
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-top: 16px;
  margin-right: 5px;
}
</style>
