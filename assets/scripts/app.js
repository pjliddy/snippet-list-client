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
  const navTemplate = require('./templates/nav-public.handlebars')
  const contentTemplate = require('./templates/auth-forms.handlebars')
  $('.content-div').html(contentTemplate())
  $('.navbar-div').html(navTemplate())
  clearConsole()
}

const setPrivateMode = function () {
  const navTemplate = require('./templates/nav-private.handlebars')
  const contentTemplate = require('./templates/contents.handlebars')
  $('.content-div').html(contentTemplate())
  $('.navbar-div').html(navTemplate())
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
