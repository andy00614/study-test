import axios from 'axios'

export function callFn(callback) {
  callback()
}

export const getData = () => {
  return axios.get('/api').then(res => res.data)
}