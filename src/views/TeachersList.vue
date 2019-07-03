<template>
  <div class="list">
    <h2>Teachers List</h2>
    <div v-for="teacher in teachers" :key="teacher.id" class="list__item">
      <p>First name: {{teacher.first_name}}</p>
      <p>Last name: {{teacher.last_name}}</p>
      <p>Job title: {{teacher.job_title}}</p>
      <p>Age: {{teacher.age}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachersList",
  computed: {
    teachers() {
      return this.$store.getters.getTeachers
    }
  },
  created() {
    if (this.teachers.length === 0) {
      this.$store.dispatch("loadTeachers")
    }
  }
};
</script>
