import axios from "axios";

const BASE_API = import.meta.env.VITE_BASE_API;

const service = axios.create({
  baseURL: BASE_API,
})

// Настройка всех запросов

service.interceptors.request.use(config => {
  const conf = config

  conf.headers['Content-Type'] = 'application/x-www-form-urlendcoded;charset=UTF-8'

  return conf
},
  (error) => {
    Promise.reject(error)
  }
)

// Настройка всех ответов

service.interceptors.response.use((response)=>{
  const { data } = response ;
  return data
},

// 401, 403, 500 итд
(error) => {
  Promise.reject(new Error (error))
}
)

export default service
