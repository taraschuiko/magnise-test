<template>
  <div class="AddGroup">
    <input type="text" placeholder="Title" v-model="title" @keyup.enter="addGroup">
    <button @click="addGroup">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddGroup",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    addGroup() {
      if (this.title) {
        this.$store.dispatch("addGroup", {
          title: this.title,
        })
        this.title = ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.AddGroup {
  margin-bottom: 20px;

  input {
    margin-right: 5px;
  }
}
</style>
