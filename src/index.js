const emojilist = require('./emojilist')
const emojirankings = require('./rankings.json')
const sprinkler = require('sprinkler')
const infobox = require('./infobox')

var c = document.getElementById('canvas')
var s = sprinkler.create(c)

// DEBUG TOOL
// Uncomment to inspect emojirankings structure.
// console.log(JSON.stringify(emojirankings).substr(0, 300))

// Build image distribution.
const imageDist = emojirankings.reduce((acc, emoji) => {
  if (emojilist.indexOf(emoji.id) >= 0) {
    const url = 'img/openmoji/' + emoji.id + '.png'
    acc[url] = emoji.score
  } else {
    console.warn(emoji.id + ' is missing.')
  }
  return acc
}, {})

s.start(imageDist, {
  burnInSeconds: 10,
  imagesInSecond: 4,
  zMin: 1,
  zMax: 1,
  rMin: 0,
  rMax: 0,
  aMin: 1,
  aMax: 1,
  drMin: -0.02,
  drMax: +0.02,
  daMin: 0,
  daMax: 0,
  dyMin: 100,
  dyMax: 150
})

document.body.appendChild(infobox())
