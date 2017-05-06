'use strict'

//
// debugging methods
//

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

//
// view renderers
//

const renderView = function (element, content) {
  $(element).html(content)
}

const appendView = function (element, content) {
  $(element).append(content)
}

const prependView = function (element, content) {
  $(content).prependTo(element)
}

const insertView = function (element, content) {
  $(element).before(content)
}

const replaceView = function (element, content) {
  $(element).replaceWith(content)
}

//
// alert methods
//

// trigger form input validation alert

const formAlert = function (form, field) {
  $(form).find('.form-group').removeClass('has-warning has-feedback')
  $(form).find('.form-group .form-control-feedback').remove()
  $(form).find('.help-block').hide()

  $(field).closest('.form-group').addClass('has-warning has-feedback')
  const icon = `<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>`
  $(field).closest('.input-group').append(icon)
  $(field).closest('.form-group').find('.help-block').show()
}

// show global alert box

const showAlert = function (message) {
  const alertTemplate = require('./templates/alert-info.handlebars')
  const content = alertTemplate({ message: message })
  insertView('.content-div', content)
}

// close global alert box

const closeAlert = function () {
  $('.alert').alert('close')
}

//
// switching public & private modes
//

const setPublicMode = function () {
  closeAlert()
  const navTemplate = require('./templates/nav-public.handlebars')
  const contentTemplate = require('./templates/auth-forms.handlebars')
  renderView('.navbar-div', navTemplate())
  renderView('.content-div', contentTemplate())
}

const setPrivateMode = function () {
  const navTemplate = require('./templates/nav-private.handlebars')
  renderView('.navbar-div', navTemplate())
}

//
//  Item methods
//

// show all items

const showItems = function (data) {
  cancelNewItem()
  const contentTemplate = require('./templates/content.handlebars')
  const content = contentTemplate({ items: data })
  renderView('.content-div', content)
}

// show the new item form

const showNewItem = function () {
  // disable Add Snippet button
  $('#new-item-link').addClass('.disabled')
  $('#new-item-link').attr('disabled', true)
  $('#new-item-link').prop('disabled', true)

  const contentTemplate = require('./templates/new-item.handlebars')
  prependView('.item-grid', contentTemplate())
}

// cancel the new item form

const cancelNewItem = function () {
  // re-enable add snippet button
  $('#new-item-link').removeClass('.disabled')
  $('#new-item-link').attr('disabled', false)
  $('#new-item-link').prop('disabled', false)

  $('.create-item').remove()
}

// submit the new item form

const saveUpdateItem = function (item) {
  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $('.update-item')
  replaceView(itemDiv, viewTemplate(item))

  // back to display module
  successMessage('Save Update', item)
}

// show the update item form

const showUpdateItem = function (event) {
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

// cancel the update item form

const cancelUpdateItem = function (event) {
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

// password changed successfully

const changePasswordSuccess = function () {
  $('#change-password-nav').dropdown('toggle')
  $('#change-password input').val('')
  showAlert('Password changed.')
}

module.exports = {
  message,
  successMessage,
  failureMessage,
  renderView,
  appendView,
  prependView,
  insertView,
  formAlert,
  showAlert,
  closeAlert,
  setPublicMode,
  setPrivateMode,
  showItems,
  showNewItem,
  cancelNewItem,
  showUpdateItem,
  cancelUpdateItem,
  saveUpdateItem,
  changePasswordSuccess
}
