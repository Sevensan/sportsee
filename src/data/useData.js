/**
 * Get datas from API by ID/endpoint
 * @param {Number} id user ID
 * @param {String} endpoint API endpoint where we need datas
 * @return {Promise} with datas
 */
export default function getUser(id, endpoint = "/") {
    return fetch(`http://localhost:3000/user/${id}${endpoint}`).then(data => data.json().catch(error => error))
}