<template>
  <div>
    <h2>Student Detail</h2>
    <h3>{{student.first_name}} {{student.last_name}}</h3>
    <p>Age: {{student.age}}</p>
    <p>ID: {{student.id}}</p>
  </div>
</template>

<script>
export default {
  name: "StudentDetail",
  computed: {
    student() {
      return this.$store.getters.getStudentDetail
    }
  },
  created() {
    this.$store.dispatch("loadStudentDetail", this.$route.params.id)
  }
};
</script>
