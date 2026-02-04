import axiosClient from "./axiosClient"



const register = async (body) => {
  
  return await axiosClient.post('/register', body)
}

const signIn = async (body) => {
  return await axiosClient.post('/login', body)
}

const getInfor = async () => {
  return await axiosClient.get('/user/infor/')
}

export { register, signIn, getInfor }