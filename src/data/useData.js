
export default function getUser(id, endpoint = "/") {
    return fetch(`http://localhost:3000/user/${id}${endpoint}`).then(data => data.json().catch(error => error))
}
// export function getActivity() {
//     const response = fetch('http://localhost:3000/user/12/activity')
//     const data = response.json()
//     return data
// }
// export function getAverageSessions() {
//     const response = fetch('http://localhost:3000/user/12/average-sessions')
//     const data = response.json()
//     return data
// }
// export function getPerformance() {
//     const response = fetch('http://localhost:3000/user/12/performance')
//     const data = response.json()
//     return data
// }