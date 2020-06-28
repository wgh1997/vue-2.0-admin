import axios from '@/config/httpConfig'

export function fetchPermission () {
  return axios.get('http://127.0.0.1:8002/fetchPermission')
}

export function login () {
  return axios.get('http://127.0.0.1:8002/long')
}
