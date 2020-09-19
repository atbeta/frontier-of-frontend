console.log('Yeah here!')

function sum(x: number, y: number): number {
  return x + y
}

const t = sum(100, 200)
console.log(t)

const appEl = document.querySelector('#app')
const helloEl = document.createElement('h1')
helloEl.innerText = 'Hello World!'

appEl && appEl.appendChild(helloEl)
