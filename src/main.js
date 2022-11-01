// localStorage.setItem('TEST', 'TEST')
// localStorage.clear()

const hasLocalData = localStorage.length

if (!!hasLocalData) {
  window.location.href = "http://localhost:5500/src/modules/Login/index.html"
} else {
  window.location.href = "http://localhost:5500/src/modules/Home/index.html"
}
