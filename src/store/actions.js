const PROXY = "https://cors-anywhere.herokuapp.com/"
const BASE_URL = `${PROXY}http://173.212.246.114:8027/api`

export default {
    loadStudents(context) {
        fetch(`${BASE_URL}/students`, {
            method: "GET"
        }).then(r => r.json())
        .then(json => context.commit("setStudents", json.students))
    }
}