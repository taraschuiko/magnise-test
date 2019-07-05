<template>
  <div class="list__item">
    <p>Title: {{group.title}}</p>
    <router-link :to="`/group-schedule/${group.id}`">
      <button>Details</button>
    </router-link>
    <button @click="toggleEditing">Edit</button>
    <button @click="deleteGroup">Delete</button>
    <div v-if="isEditing">
      <input type="text" placeholder="Title" @keyup.enter="updateGroup" v-model="title" />
      <button @click="updateGroup">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupsListItem",
  data() {
    return {
      isEditing: false,
      title: this.group.title,
    };
  },
  props: {
    group: Object
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
    updateGroup() {
      if (this.title) {
        this.$store.dispatch("updateGroup", {
          id: this.group.id,
          group: {
            title: this.title
          }
        });
      }
      this.isEditing = false;
    },
    deleteGroup() {
      this.$store.dispatch("deleteGroup", this.group.id)
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-top: 16px;
  margin-right: 5px;
}
</style>
