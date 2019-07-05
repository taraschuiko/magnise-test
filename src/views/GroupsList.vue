<template>
  <div class="list">
    <h2>Groups List</h2>
    <AddGroup />
    <GroupsListItem v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<script>
import AddGroup from "../components/AddGroup"
import GroupsListItem from "../components/GroupsListItem"

export default {
  name: "GroupsList",
  components: {
    AddGroup,
    GroupsListItem
  },
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
