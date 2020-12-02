import axios from '@/config/httpConfig'

export function fetchPermission () {
  return axios.get('http://127.0.0.1:8002/fetchPermission')
}

export function login () {
  return axios.get('http://127.0.0.1:8002/long')
}
export function cles () {
  return axios.get('http://127.0.0.1:8002/cles')
}
export function cles4 () {
  return axios.get('http://127.0.0.1:8002/cles4',{
    headers: {
      isLoading: true
    },
  })
}


