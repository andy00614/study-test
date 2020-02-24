export const requestMock = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject('true')
    }, 1000);
  })
}

export const fetchCallback = (callback) => {
  return requestMock().then(res => {
    callback(res)
  })
}
