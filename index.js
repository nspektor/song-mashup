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
      lyricsEl.innerText = lyricObj.lyrics
      getFreqs(lyricObj.lyrics)
      console.log("LYRICSSSS?")
      console.log(lyrics)
    } catch (error) {
      console.log(error)
    }
}


// Taken from: https://stackoverflow.com/questions/30906807/word-frequency-in-javascript
var getFreqs = (lyricStr) => {
    // lyricStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    // lyricStr.toLowerCase()
    /* Below is a regular expression that finds alphanumeric characters
       Next is a string that could easily be replaced with a reference to a form control
       Lastly, we have an array that will hold any words matching our pattern */
    var pattern = /\w+/g
    var string = lyricStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
    var matchedWords = string.split(/\s/g)
        //matchedWords = string.match( pattern );


    /* The Array.prototype.reduce method assists us in producing a single value from an
       array. In this case, we're going to use it to output an object with results. */
    var counts = matchedWords.reduce(function ( stats, word ) {

        /* `stats` is the object that we'll be building up over time.
           `word` is each individual entry in the `matchedWords` array */
        if ( stats.hasOwnProperty( word ) ) {
            /* `stats` already has an entry for the current `word`.
               As a result, let's increment the count for that `word`. */
            stats[ word ] = stats[ word ] + 1;
        } else {
            /* `stats` does not yet have an entry for the current `word`.
               As a result, let's add a new entry, and set count to 1. */
            stats[ word ] = 1;
        }

        /* Because we are building up `stats` over numerous iterations,
           we need to return it for the next pass to modify it. */
        return stats;

    }, {} );

    /* Now that `counts` has our object, we can log it. */
    console.log( counts );

}
