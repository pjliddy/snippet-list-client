const Handlebars = require('handlebars')

// module.exports = function (text) {
  // text = text.replace(/\r\n|\n\r|\r|\n/, '\n')
  // text = text.replace(`  `, ' ')

module.exports = function (data) {
  const result = data.replace(/\n/g, '\n')
  const out = Handlebars.Utils.escapeExpression(result)
  return new Handlebars.SafeString(out)

  // const len = text.length
  // text = text + ' ' + len
  // return text
}
