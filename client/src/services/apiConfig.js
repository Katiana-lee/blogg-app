import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://blog-app-group-2.herokuapp.com/api',
    // development: 'http://localhost:3000/api'
  development: 'https://blog-app-group-2.herokuapp.com/api'
}
console.log(window.location.hostname)
if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api
