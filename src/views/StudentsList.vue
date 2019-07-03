<template>
  <div class="list">
    <h2>Students List</h2>
    <div v-for="student in students" :key="student.id" class="list__item">
      <p>First name: {{student.first_name}}</p>
      <p>Last name: {{student.last_name}}</p>
      <p>Age: {{student.age}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsList',
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
