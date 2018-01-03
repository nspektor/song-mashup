const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  alert("hi")
  greetingEl.innerText = "pick a song, any song!"
  //renderAstros()
}


const form = document.getElementById("form")
const song = document.getElementById("song")
const artist = document.getElementById("artist")
const lyricsEl = document.getElementById("lyrics")
const w1 = document.getElementById("w1")
const w2 = document.getElementById("w2")
const w3 = document.getElementById("w3")
const w4 = document.getElementById("w4")


form.onsubmit = (event) => {
  console.log("HELLO")
  event.preventDefault()
  console.log(song.value)
  console.log(artist.value)
  console.log(w1.value)
  console.log(w2.value)
  console.log(w3.value)
  console.log(w4.value)
  getLyrics()
}

async function getLyrics() {
    try {
      let response = await fetch("https://api.lyrics.ovh/v1/" + artist.value + "/" + song.value.replace(" ", "+"))
      let lyricObj = await response.json()
      lyricsEl.innerText = newLyrics(lyricObj.lyrics)
      console.log("LYRICSSSS?")
      console.log(lyrics)
    } catch (error) {
      console.log(error)
    }
}

function newLyrics(lyrics){
  console.log(getFrequency(lyrics))
  return lyrics
}




//
// var printSongs = () => {
//   const songNames = (data) => {
//   names = .people.map((person) => {
//     return person.name
//   })
//   return names
//   // return an array containing the name strings of the astronauts in space
// }
//
// getData = () =>{
//   fetch(URL OF API)
//   .then(r => r.json()) //json.parse r which is response of fetch, to make usable js object
//   .then(astros => renderAstros(astros)) //response of r.json (so its a js object) thing is fed into renderAstros
// }
//
// // new fancy fetch
// // async:
//
// asynch function getAstros(){
//   try{
//     let response = await fetch(link)
//     let astros = await response.json()
//     renderAstros(astros)
//   } catch (error){
//     console.log(error)
//   }
//
//   }
// }
//
//
//
// //JSON.stringify(object) js object -> JSON
// //JSON.parse(jsonObject) JSON -> js object
