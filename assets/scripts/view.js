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

const replaceView = function (element, content) {
  $(element).replaceWith(content)
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

const editItem = function (event) {
  // get values from current item
  const item = {
    id: $(event.target).closest('.panel').data('id'),
    title: $(event.target).closest('.panel').find('.item-title').text(),
    body: $(event.target).closest('.panel').find('.item-body').html()
  }

  // change on-screen module from display to editable module
  const editTemplate = require('./templates/edit-item.handlebars')
  const itemDiv = $(event.target).closest('.show-item')
  replaceView(itemDiv, editTemplate(item))

  // TO DO: ADD HANDLERS FOR CANCEL & SAVE FOR EDIT

  // ADD DATA-ITEM TO STORE ORIGINAL STATE OF ITEM BEING EDITED
  // ADD DATA-ID

  successMessage('Edit Item', item)
}

const cancelEditItem = function (event) {
  // back to display module
  successMessage('Cancel Edit', {})
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
  cancelNewItem,
  editItem,
  cancelEditItem
}
