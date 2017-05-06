'use strict'

//
// VIEW RENDERING METHODS
//

// renderView(element, content)
//    replaces element's html with content

const renderView = (element, content) => {
  $(element).html(content)
}

// appendView(element, content)
//    appends content to the end of element's html

const appendView = (element, content) => {
  $(element).append(content)
}

// prependView(element, content)
//    prepends content in front of element inside a common parent

const prependView = (element, content) => {
  $(content).prependTo(element)
}

// insertView(element, content)
//    inserts content before element's html

const insertView = (element, content) => {
  $(element).before(content)
}

// replaceView(element, content)
//    replaces element with content

const replaceView = (element, content) => {
  $(element).replaceWith(content)
}

//
// VALIDATION & ALERT METHODS
//

// formAlert(form, field)
//    triggers form input validation alert

const formAlert = (form, field) => {
  // clear all alert classes from inputs
  $(form).find('.form-group').removeClass('has-warning has-feedback')
  // remove all alert class icons from inputs
  $(form).find('.form-group .form-control-feedback').remove()
  // hide any visible help text
  $(form).find('.help-block').hide()

  // apply alert classes to specfic input
  $(field).closest('.form-group').addClass('has-warning has-feedback')
  // add alert icon to specific input
  $(field).closest('.input-group').append(`<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>`)
  // show help text for specific input
  $(field).closest('.form-group').find('.help-block').show()
}

// showAlert(mode, message)
//    displays global alert box for info or warning

const showAlert = function (mode, message) {
  let alertTemplate
  // render handlebars template with message
  if (mode === `error`) {
    alertTemplate = require('./templates/alert-error.handlebars')
  } else {
    alertTemplate = require('./templates/alert-info.handlebars')
  }
  const content = alertTemplate({ message: message })

  // if there's already an alert
  if ($('.alert').length) {
    // replace the existing alert
    replaceView('.alert', content)
  } else {
    // insert a new alert
    insertView('.content-div', content)
  }
}

// closeError()
//  close global error box but not info alerts

const closeError = function () {
  $('.alert-danger').alert('close')
}

// closeAlert()
//   close all global alert boxes

const closeAlert = function () {
  $('.alert').alert('close')
}

// confirmDelete(id)
//    presents a modal dialog to confirm user's action to delete an item

const confirmDelete = function (id) {
  // render handlebars template with data-id for item
  const contentTemplate = require('./templates/confirm-delete.handlebars')
  const content = contentTemplate({id: id})

  // if there's already a modal
  if ($('#delete-modal').length) {
    // replace the existing modal
    replaceView('#delete-modal', content)
  } else {
    // insert a new alert
    appendView('body', content)
  }

  // show the hidden modal
  $('#delete-modal').modal('show')
}

//
//  PUBLIC AND PRIVATE MODES
//

//  setPublicMode()
//    set public mode for navbar and content area

const setPublicMode = function () {
  closeAlert()
  // render handlebars template for public nav
  const navTemplate = require('./templates/nav-public.handlebars')
  renderView('.navbar-div', navTemplate())
  // render handlebars template for sign-in/sign-up forms
  const contentTemplate = require('./templates/auth-forms.handlebars')
  renderView('.content-div', contentTemplate())
}

//  setPrivateMode()
//    set private mode for navbar and content area

const setPrivateMode = function () {
  // render handlebars template for private nav
  const navTemplate = require('./templates/nav-private.handlebars')
  renderView('.navbar-div', navTemplate())
}

//
//  ITEM METHODS
//

//  showItems(data)
//    show all items for current user

const showItems = function (data) {
  // render handlebars template for private nav
  const contentTemplate = require('./templates/content.handlebars')
  const content = contentTemplate({ items: data })
  renderView('.content-div', content)
}

//  showNewItem()
//    show the new item form

const showNewItem = function () {
  // disable Add Snippet button so only one new item dialog can be open
  $('#new-item-link').addClass('.disabled')
  $('#new-item-link').attr('disabled', true)
  $('#new-item-link').prop('disabled', true)

  // render handlebars template for new item form
  const contentTemplate = require('./templates/new-item.handlebars')
  prependView('.item-grid', contentTemplate())
}

//  cancelNewItem()
//    cancel the new item form

const cancelNewItem = function () {
  // re-enable add snippet button
  $('#new-item-link').removeClass('.disabled')
  $('#new-item-link').attr('disabled', false)
  $('#new-item-link').prop('disabled', false)

  // clear new item form element from DOM
  $('.create-item').remove()
}

//  showUpdateItem(event)
//    show the update item form

const showUpdateItem = function (event) {
  // store values from current item to store (for cancel)
  const item = {
    id: $(event.target).closest('.panel').data('id'),
    title: $(event.target).closest('.panel').find('.item-title').text(),
    body: $(event.target).closest('.panel').find('.item-body').html()
  }

  // render handlebars template for edit item form
  const updateTemplate = require('./templates/update-item.handlebars')
  const itemDiv = $(event.target).closest('.show-item')
  replaceView(itemDiv, updateTemplate(item))
}

//  saveUpdateItem(item)
//    change from edit to view mode

const saveUpdateItem = function (item) {
  // render handlebars template to show new item
  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $('.update-item')
  replaceView(itemDiv, viewTemplate(item))
}

// cancelUpdateItem(event)
//    cancel the update item form

const cancelUpdateItem = function (event) {
  // get original item data
  const item = {
    item: {
      id: $(event.target).closest('.panel').data('id'),
      title: $(event.target).closest('.panel')
        .find('#update-item-title').data('content'),
      body: $(event.target).closest('.panel')
        .find('#update-item-body').data('content')
    }
  }

  // render handlebars template for original data view
  const viewTemplate = require('./templates/show-item.handlebars')
  const itemDiv = $(event.target).closest('.update-item')
  replaceView(itemDiv, viewTemplate(item))
}

//  showChangePasswordSuccess()
//    password changed successfully

const showChangePasswordSuccess = function () {
  // collapse change password dropdown
  $('#change-password-nav').dropdown('toggle')
  // clear change password form fields
  $('#change-password input').val('')
  // display successful alert message
  showAlert('info', 'Password changed.')
}

module.exports = {
  renderView,
  appendView,
  prependView,
  insertView,
  formAlert,
  showAlert,
  closeAlert,
  closeError,
  confirmDelete,
  setPublicMode,
  setPrivateMode,
  showItems,
  showNewItem,
  cancelNewItem,
  showUpdateItem,
  saveUpdateItem,
  cancelUpdateItem,
  showChangePasswordSuccess
}
