const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  alert("hi")
  greetingEl.innerText = "oh, hey there!"
  //renderAstros()
  makeListOfAstronauts()
}
