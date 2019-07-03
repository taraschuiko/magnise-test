<template>
  <div class="list">
    <h2>Schedules List</h2>
    <div v-for="schedule in schedules" :key="schedule.id" class="list__item">
      <p>Group: {{schedule.group_title}}</p>
      <p>Day: {{new Date(schedule.day).getDate()}}/{{new Date(schedule.day).getMonth()}}/{{new Date(schedule.day).getFullYear()}}</p>
      <p>Time: {{schedule.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchedulesList",
  computed: {
    schedules() {
      return this.$store.getters.getSchedules
    }
  },
  created() {
    if (this.schedules.length === 0) {
      this.$store.dispatch("loadSchedules")
    }
  }
};
</script>
