import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
}) 

axiosClient.interceptors.request.use(async (config) => {
  const token = Cookies.get('token')

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
}, (err) => {
  return Promise.reject(err)
})

axiosClient.interceptors.response.use((res) => {
  return res
}, async (err) => {
  const orgRequest = err.config

  if(err.response.status === 401 && orgRequest._retry){
    orgRequest._retry = true
    const refreshToken = Cookies.get('refreshToken')

    if(!refreshToken) return Promise.reject(err)
    try {
      const res = await axiosClient.post('/refresh-token', {token: refreshToken})
      const newAccessToken = res.data.accessToken
      Cookies.set('token', newAccessToken)

      orgRequest.headers.Authorization = `Bearer ${newAccessToken}`

      return axiosClient(orgRequest)
    } catch (error) {
      Cookies.remove('refreshToken')

      return Promise.reject(err)
    }
  }
})

export default axiosClient