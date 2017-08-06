var fs = require('fs')

var memes = JSON.parse(fs.readFileSync('memes.json', 'utf8'))

// var d = new Date(0)
for (let i = 0; i < memes.length; i++) {
  if (memes[i]['archived'] == null) {
    memes[i]['archived'] = false
  }
}
saveMemes()

function compareMemes (a, b) {
  return a['name'].toLowerCase().localeCompare(b['name'].toLowerCase())
}

function saveMemes () {
  memes.sort(compareMemes)
  fs.writeFileSync('memes-converted.json', JSON.stringify(memes, null, 2))
}
