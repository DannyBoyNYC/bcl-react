const el = document.querySelector('html')
var testElem = document.createElement('div')
if (testElem.style.grid !== undefined) {
  el.classList.add('cssgrid')
} else {
  el.classList.add('no-cssgrid')
}