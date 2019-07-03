<template>
  <div>
    <h2>Students List</h2>
    <div>
      <div v-for="student in students" :key="student.id" class="student-list__item">
        <p>First name: {{student.first_name}}</p>
        <p>Last name: {{student.last_name}}</p>
        <p>Age: {{student.age}}</p>
      </div>
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
    this.$store.dispatch("loadStudents")
  }
}
</script>

<style lang="scss" scoped>
.student-list__item {
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-bottom: 5px;
}
</style>
