import axios from 'axios'

const secureAxios=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

secureAxios.interceptors.request.use(config =>{
    config.headers['Authorization']='token'
    return config
})
secureAxios.interceptors.response.use(response =>{
    console.log('Server call is success')
    return response
},error=>{
    console.log('Server Error')
    return 'Errored'
})

export default secureAxios