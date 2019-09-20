var template = require('./template.ejs')
require('./style.css')

module.exports = () => {
  const htmlString = template()
  const div = document.createElement('div')
  div.innerHTML = htmlString
  const elem = div.firstChild

  const icon = elem.querySelector('.infobox-icon')
  const body = elem.querySelector('.infobox-body')

  icon.addEventListener('click', ev => {
    body.classList.toggle('infobox-hidden')
  })

  return elem
}
