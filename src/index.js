const emojilist = require('./emojilist')
const sprinkler = require('sprinkler')
const infobox = require('./infobox')

var c = document.getElementById('canvas')
var s = sprinkler.create(c)

var images = emojilist.map(filename => {
  return 'img/openmoji/' + filename + '.png'
})

s.start(images, {
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
