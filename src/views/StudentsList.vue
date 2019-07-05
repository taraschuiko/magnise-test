<template>
  <div class="list">
    <h2>Students List</h2>
    <AddStudent />
    <StudentsListItem v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<script>
import AddStudent from "../components/AddStudent";
import StudentsListItem from "../components/StudentsListItem"

export default {
  name: "StudentsList",
  components: {
    AddStudent,
    StudentsListItem
  },
  computed: {
    students() {
      return this.$store.getters.getStudents;
    }
  },
  created() {
    if (this.students.length === 0) {
      this.$store.dispatch("loadStudents");
    }
  }
};
</script>
