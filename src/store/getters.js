import store from "./index"

export default {
  getStudents() {
    return store.state.students
  },
  getGroups() {
    return store.state.groups
  }
}