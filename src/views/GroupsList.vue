<template>
  <div class="list">
    <h2>Groups List</h2>
    <div v-for="group in groups" :key="group.id" class="list__item">
      <p>Title: {{group.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "GroupsList",
    computed: {
      groups() {
        return this.$store.getters.getGroups
      }
    },
    created() {
      if (this.groups.length === 0) {
        this.$store.dispatch("loadGroups")
      }
    }
}
</script>
