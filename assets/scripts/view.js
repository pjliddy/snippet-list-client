'use strict'

// message()
// sets the html content of the message component in the game UI

const message = function (msg) {
  // $('.message').html(msg)
  console.log(msg)
}

const successMessage = function (msg, response) {
  console.log(`${msg}: ${JSON.stringify(response)}`)
  // $('.console').append(JSON.stringify(response) + '<br/>')
}

const failureMessage = function (msg, response) {
  console.error(`${msg}: ${JSON.stringify(response)}`)
  // $('.console').append(JSON.stringify(response) + '<br/>')
}

const setPublicMode = function () {
  const navTemplate = require('./templates/nav-public.handlebars')
  renderView('.navbar-div', navTemplate())

  const contentTemplate = require('./templates/auth-forms.handlebars')
  renderView('.content-div', contentTemplate())
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

  successMessage('Edit Item', item)
}

const cancelEditItem = function (event) {
  // Object {id: 54, title: "Test", body: "Cleaned up UI. Good Stuff. Yay"}
  const item = {
    item: {
      id: $(event.target).closest('.panel').data('id'),
      title: $(event.target).closest('.panel')
        .find('#update-item-title').data('content'),
      body: $(event.target).closest('.panel')
        .find('#update-item-body').data('content')
    }
  }

  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $(event.target).closest('.edit-item')
  replaceView(itemDiv, viewTemplate(item))

  // back to display module
  successMessage('Cancel Edit', item)
}

const saveEditedItem = function (item) {
  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $('.edit-item')
  replaceView(itemDiv, viewTemplate(item))

  // back to display module
  successMessage('Save Edit', item)
}

const formAlert = function (form, field) {
  $(form).find('.form-group').removeClass('has-warning has-feedback')
  $(form).find('.form-group .form-control-feedback').remove()
  $(form).find('.help-block').hide()

  $(field).closest('.form-group').addClass('has-warning has-feedback')
  const icon = `<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>`
  $(field).closest('.input-group').append(icon)
  $(field).closest('.form-group').find('.help-block').show()
}

module.exports = {
  message,
  successMessage,
  failureMessage,
  setPublicMode,
  setPrivateMode,
  renderView,
  appendView,
  newItem,
  cancelNewItem,
  editItem,
  cancelEditItem,
  saveEditedItem,
  formAlert
}
