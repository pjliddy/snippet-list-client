'use strict'

// message()
// sets the html content of the message component in the game UI

const message = function (msg) {
  // $('.message').html(msg)
  console.log(msg)
}

const successMessage = function (msg, response) {
  console.log(`${msg}: ${JSON.stringify(response)}`)
}

const failureMessage = function (msg, response) {
  console.error(`${msg}: ${JSON.stringify(response)}`)
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

const prependView = function (element, content) {
  $(content).prependTo(element)
}

const replaceView = function (element, content) {
  $(element).replaceWith(content)
}

const setPrivateMode = function () {
  const navTemplate = require('./templates/nav-private.handlebars')
  renderView('.navbar-div', navTemplate())
}

const showItems = function (data) {
  clearNewItem()
  const contentTemplate = require('./templates/content.handlebars')
  const content = contentTemplate({ items: data })
  renderView('.content-div', content)
}

const newItem = function () {
  // disable Add Snippet button
  $('#new-item-link').addClass('.disabled')
  $('#new-item-link').attr('disabled', true)
  $('#new-item-link').prop('disabled', true)

  const contentTemplate = require('./templates/new-item.handlebars')
  prependView('.item-grid', contentTemplate())
}

const clearNewItem = function () {
  // re-enable add snippet button
  $('#new-item-link').removeClass('.disabled')
  $('#new-item-link').attr('disabled', false)
  $('#new-item-link').prop('disabled', false)

  $('.create-item').remove()
}

const updateItem = function (event) {
  // get values from current item
  const item = {
    id: $(event.target).closest('.panel').data('id'),
    title: $(event.target).closest('.panel').find('.item-title').text(),
    body: $(event.target).closest('.panel').find('.item-body').html()
  }

  // change on-screen module from display to editable module
  const updateTemplate = require('./templates/update-item.handlebars')
  const itemDiv = $(event.target).closest('.show-item')
  replaceView(itemDiv, updateTemplate(item))

  // TO DO: ADD HANDLERS FOR CANCEL & SAVE FOR EDIT

  successMessage('Edit Item', item)
}

const cancelUpdate = function (event) {
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
  const itemDiv = $(event.target).closest('.update-item')
  replaceView(itemDiv, viewTemplate(item))

  // back to display module
  successMessage('Cancel Update', item)
}

const saveUpdate = function (item) {
  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $('.update-item')
  replaceView(itemDiv, viewTemplate(item))

  // back to display module
  successMessage('Save Update', item)
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
  prependView,
  showItems,
  newItem,
  clearNewItem,
  updateItem,
  cancelUpdate,
  saveUpdate,
  formAlert
}
