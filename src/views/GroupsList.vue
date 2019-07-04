<template>
  <div class="list">
    <h2>Groups List</h2>
    <router-link :to="`/group-schedule/${group.id}`" v-for="group in groups" :key="group.id">
      <div class="list__item">
        <p>Title: {{group.title}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GroupsList",
  computed: {
    groups() {
      return this.$store.getters.getGroups;
    }
  },
  created() {
    if (this.groups.length === 0) {
      this.$store.dispatch("loadGroups");
    }
  }
};
</script>
