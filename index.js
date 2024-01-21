
const clockR = document.querySelector('.clock')

// By using Date object
setInterval(function () {
  let date = new Date();
  clockR.innerHTML = date.toLocaleTimeString()
}, 1000)