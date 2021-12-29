function getTimeNow() {
  let data = new Date()
  let hours = data.getHours()
  let minutes = data.getMinutes()
  let seconds = data.getSeconds()
  console.log(`${hours}:${minutes}:${seconds}`)
}

function printFuncDuring100sec() {
  let timer = setInterval(getTimeNow, 1000)
  setTimeout(clearInterval,100 * 1000, timer)
}
