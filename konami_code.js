const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

init()
function init() {
  document.body.addEventListener('keydown', konami)
}


function konami(e) {
  var key = parseInt(e.which || e.detail)
  console.log(key)
  if (key === code[index]) {
    index ++
  }

  if (index === code.length) {
    alert("Surprise!")
    index = 0
    document.body.removeEventListener('keydown')
  }
}
