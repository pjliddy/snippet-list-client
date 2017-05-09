const Handlebars = require('handlebars')

module.exports = function (text) {
  // templates
  const result = new Handlebars.SafeString('Yo! Ben\n' + text)
  return result
  // return ('Yo! ' + text)
}
