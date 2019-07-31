export default new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 || resolve(new Date().getTime())
    reject('It\'s later now')
  })
})