'use strict'

const itemApi = require('./items/api.js')
const ui = require('./items/ui.js')

const succeed = (msg, response) => {
  console.log(`${msg}: ${JSON.stringify(response.items)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const fail = (msg, response) => {
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

  // get books from API
  itemApi.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)

  $('.navbar-div').html(navTemplate())
}

const addHandlers = () => {
  // $('#sign-up-nav').on('click', onShowSignUp)
  // $('#sign-in-nav').on('click', onShowSignIn)
}

module.exports = {
  succeed,
  fail,
  clearConsole,
  setPublicMode,
  setPrivateMode,
  addHandlers
}
