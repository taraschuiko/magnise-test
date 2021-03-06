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
  },
  getSchedules() {
    return store.state.schedules
  },
  getStudentDetail() {
    return store.state.studentDetail
  },
  getGroupSchedule() {
    return store.state.groupSchedule
  }
}