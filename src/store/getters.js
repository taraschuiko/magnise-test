import store from "./index"

export default {
  getStudents() {
    return store.state.students
  },
  getGroups() {
    return store.state.groups
  },
  getTeachers() {
    return store.state.teachers
  }
}