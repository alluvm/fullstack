import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const update = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}
const remove = id => {
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)

}

const create = ({newObject}) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

export default { 
    getAll:getAll,
    create:create, 
    update:update, 
    remove:remove
 }
