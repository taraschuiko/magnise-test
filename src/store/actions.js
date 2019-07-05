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
  },
  loadGroupSchedule(context, id) {
    fetch(`${BASE_URL}/groups/${id}/schedule`, {
      method: "GET"
    }).then(r => r.json())
      .then(json => context.commit("setGroupSchedule", json.schedule))
  },
  addStudent(context, student) {
    fetch(`${BASE_URL}/students`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: serialize(student)
    }).then(() => context.dispatch("loadStudents"))
  },
  updateStudent(context, payload) {
    fetch(`${BASE_URL}/students/${payload.id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: serialize(payload.student)
    }).then(() => context.dispatch("loadStudents"))
  },
  deleteStudent(context, id) {
    fetch(`${BASE_URL}/students/${id}`, {
      method: "DELETE"
    }).then(() => context.dispatch("loadStudents"))
  }
}

function serialize(obj) {
  let str = [];
  for(let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}