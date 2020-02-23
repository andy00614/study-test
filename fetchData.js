export const requestMock = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('true')
    }, 1000);
  })
}

export const fetchCallback = (callback) => {
  return requestMock().then(res => {
    callback(res)
  })
}
