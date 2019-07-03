import store from "./index"

export default {
  getStudents() {
    return store.state.students
  }
}