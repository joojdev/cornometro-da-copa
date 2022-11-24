const timerElement = document.querySelector('#timer')
const copa = new Date('Nov 24, 2022 16:00:00').getTime()

function pad(number) {
  return `0${number}`.slice(-2)
}

const timer = setInterval(() => {
  const now = new Date().getTime()

  const distance = copa - now

  const hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
  const seconds = pad(Math.floor((distance % (1000 * 60)) / 1000))

  timerElement.textContent = `${hours}:${minutes}:${seconds}`

  if (distance < 0) {
    clearInterval(timer)
    timerElement.textContent('Já começou!')
  }
}, 1000)