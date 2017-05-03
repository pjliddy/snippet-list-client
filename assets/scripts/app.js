'use strict'

const response = (msg, response) => {
  console.log(`${msg}: ${JSON.stringify(response.items)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const failure = (msg, response) => {
  console.error(`${msg}: ${JSON.stringify(response.items)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const clearConsole = () => {
  $('.console').html('')
}

const setPublicMode = function () {
  const template = require('./templates/auth-forms.handlebars')
  // const content = authTemplate()
  $('.content-div').html(template())
  clearConsole()
}

const setPrivateMode = function () {
  const template = require('./templates/contents.handlebars')
  // const content = authTemplate()
  $('.content-div').html(template())
}

const addHandlers = () => {
  // $('#sign-up-nav').on('click', onShowSignUp)
  // $('#sign-in-nav').on('click', onShowSignIn)
}

module.exports = {
  response,
  failure,
  clearConsole,
  setPublicMode,
  setPrivateMode,
  addHandlers
}
