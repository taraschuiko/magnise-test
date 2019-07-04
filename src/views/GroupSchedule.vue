<template>
  <div>
    <h2>Group Schedule</h2>
    <div v-for="item in schedule" :key="item.id">
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupSchedule",
  computed: {
    schedule() {
      return this.$store.getters.getGroupSchedule;
    }
  },
  created() {
    this.$store.dispatch("loadGroupSchedule", this.$route.params.id);
  }
};
</script>
