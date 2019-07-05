<template>
  <div class="list">
    <h2>Students List</h2>
    <AddStudent />
    <router-link :to="`/student-detail/${student.id}`" v-for="student in students" :key="student.id">
      <div class="list__item">
        <p>First name: {{student.first_name}}</p>
        <p>Last name: {{student.last_name}}</p>
        <p>Age: {{student.age}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import AddStudent from "../components/AddStudent"

export default {
  name: 'StudentsList',
  components: {
    AddStudent
  },
  computed: {
    students() {
      return this.$store.getters.getStudents
    }
  },
  created() {
    if (this.students.length === 0) {
      this.$store.dispatch("loadStudents")
    }
  }
}
</script>
