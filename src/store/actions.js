const PROXY = "https://cors-anywhere.herokuapp.com/"
const BASE_URL = `${PROXY}http://173.212.246.114:8027/api`

export default {
  loadStudents(context) {
    fetch(`${BASE_URL}/students`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setStudents", json.students))
  },
  loadGroups(context) {
    fetch(`${BASE_URL}/groups`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setGroups", json.groups))
  },
  loadTeachers(context) {
    fetch(`${BASE_URL}/teachers`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setTeachers", json.teachers))
  },
  loadSchedules(context) {
    fetch(`${BASE_URL}/schedules`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setSchedules", json.schedules))
  },
  loadStudentDetail(context, id) {
    fetch(`${BASE_URL}/students/${id}`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setStudentDetail", json.student))
  }
}