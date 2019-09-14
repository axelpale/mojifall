const emojilist = require('./emojilist');
const Sprinkler = require('sprinkler');

var c = document.getElementById('canvas');
var s = Sprinkler.create(c);

var images = emojilist.map(filename => {
  return 'img/' + filename + '.png';
});
s.load(images, function (err, start) {
  if (err) { console.error(err); return; }
  start({
    zMin: 1, zMax: 1,
    rMin: 0, rMax: 0,
    aMin: 1, aMax: 1,
    drMin: -0.02, drMax: +0.02,
    daMin: 0, daMax: 0,
    dyMin: 150, dyMax: 200
  });
});
