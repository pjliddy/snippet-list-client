'use strict'

const successMessage = function (msg, response) {
  console.log(`${msg}: ${JSON.stringify(response)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const failureMessage = function (msg, response) {
  console.error(`${msg}: ${JSON.stringify(response)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const clearConsole = () => {
  $('.console').html('')
}

const setPublicMode = function () {
  const navTemplate = require('./templates/nav-public.handlebars')
  const contentTemplate = require('./templates/auth-forms.handlebars')
  renderView('.content-div', contentTemplate())
  renderView('.navbar-div', navTemplate())
  clearConsole()
}

const renderView = function (element, content) {
  $(element).html(content)
}

const appendView = function (element, content) {
  $(element).append(content)
}

const setPrivateMode = function () {
  const navTemplate = require('./templates/nav-private.handlebars')
  renderView('.navbar-div', navTemplate())
//   $('.navbar-div').html(navTemplate())
}

const newItem = function () {
  const contentTemplate = require('./templates/new-item.handlebars')
  appendView('.item-grid', contentTemplate())
}

const cancelNewItem = function () {
  $('.new-item').remove()
}

module.exports = {
  successMessage,
  failureMessage,
  clearConsole,
  setPublicMode,
  setPrivateMode,
  renderView,
  appendView,
  newItem,
  cancelNewItem
}
