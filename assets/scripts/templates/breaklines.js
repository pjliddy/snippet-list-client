// const Handlebars = require('handlebars')
//
// Handlebars.registerHelper('breaklines', function (text) {
//   //
//   // text = Handlebars.Utils.escapeExpression(text)
//   // text = text.replace(/(\r\n|\n|\r)/gm, '<br>')
//
//   // templates
//   debugger
//
//   return new Handlebars.SafeString('Yo! ' + text)
// })

module.exports = function (text) {
  // templates
  return ('Yo! ' + text)
}
