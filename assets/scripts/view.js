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

// const itemEvents = require('./items/events')

const setPublicMode = function () {
  const navTemplate = require('./templates/nav-public.handlebars')
  const contentTemplate = require('./templates/auth-forms.handlebars')
  $('.content-div').html(contentTemplate())
  $('.navbar-div').html(navTemplate())
  clearConsole()
}

const setPrivateMode = function () {
  const navTemplate = require('./templates/nav-private.handlebars')
  $('.navbar-div').html(navTemplate())
}

const renderView = function (element, content) {
  $(element).html(content)
}

const appendView = function (element, content) {
  $(element).append(content)
}

const newItemForm = function () {
  const contentTemplate = require('./templates/new-item.handlebars')
  appendView('.item-grid', contentTemplate())
  // $('.content-div').html(contentTemplate())
}

module.exports = {
  successMessage,
  failureMessage,
  clearConsole,
  setPublicMode,
  setPrivateMode,
  renderView,
  appendView,
  newItemForm
}
