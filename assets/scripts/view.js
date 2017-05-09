'use strict'

// const hljs = require('highlight.js')
const Masonry = require('masonry-layout')
let mGrid

// const Handlebars = require('handlebars')
// const Autosize = require('autosize')

//
// VIEW RENDERING METHODS
//

// renderView(element, content)
//    replaces element's html with content

const renderView = (element, content) => {
  $(element).html(content).slideDown(250)
}

// appendView(element, content)
//    appends content to the end of element's html

const appendView = (element, content) => {
  $(element).append(content).slideDown(250)
}

// prependView(element, content)
//    prepends content in front of element inside a common parent

const prependView = (element, content) => {
  $(content).prependTo(element).slideDown(250)
}

// insertView(element, content)
//    inserts content before element's html

const insertView = (element, content) => {
  $(element).before(content).slideDown(250)
}

// replaceView(element, content)
//    replaces element with content

const replaceView = (element, content) => {
  $(element).replaceWith(content).slideDown(250)
}

// removeView(element, content)
//    replaces element with content

const removeView = (element) => {
  $(element).remove().slideUp(250)
}

//
// VALIDATION & ALERT METHODS
//

// navBarCollapse()
//    collapses navbar (for responsive selections)

const collapseNavbar = () => {
  $('.navbar-collapse').collapse('hide')
}

// formAlert(form, field)
//    triggers form input validation alert

const formAlert = (form, field) => {
  clearFormAlerts(form)
  // apply alert classes to specfic input
  $(field).closest('.form-group').addClass('has-warning has-feedback')
  // add alert icon to specific input
  $(field).closest('.input-group').append(`<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>`)
  // show help text for specific input
  $(field).closest('.form-group').find('.help-block').show()
}

// clearFormFields(form)
//    clear all values from form fields

const clearForm = (form) => {
  // clear form field alerts
  clearFormAlerts(form)
  // clear field values
  $(form).find('.form-control').val('')
}

// clearFormAlerts(form)
//    clear all feedback classes and icons from form fields

const clearFormAlerts = (form) => {
  // clear all alert classes from inputs
  $(form).find('.form-group').removeClass('has-warning has-feedback')
  // remove all alert class icons from inputs
  $(form).find('.form-group .form-control-feedback').remove()
  // hide any visible help text
  $(form).find('.help-block').hide()
}

// showAlert(mode, message)
//    displays global alert box for info or warning

const showAlert = (mode, message) => {
  // convert mode label to bootstrap class
  mode = (mode === 'error') ? 'danger' : 'info'
  // render handlebars template for alert
  const alertTemplate = require('./templates/alert.handlebars')
  const content = alertTemplate({ mode: mode, message: message })

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

const closeError = () => {
  $('.alert-danger').alert('close')
}

// closeAlert()
//   close all global alert boxes

const closeAlert = () => {
  $('.alert').alert('close')
}

// confirmDelete(id)
//    presents a modal dialog to confirm user's action to delete an item

const confirmDelete = (id) => {
  // render handlebars template with data-id for item
  const contentTemplate = require('./templates/modal-confirm-delete.handlebars')
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

const disableNewItem = () => {
  // disable Add Snippet button so only one new item dialog can be open
  $('#new-item-link').addClass('.disabled')
  $('#new-item-link').attr('disabled', true)
  $('#new-item-link').prop('disabled', true)
}

const enableNewItem = () => {
  // re-enable add snippet button
  $('#new-item-link').removeClass('.disabled')
  $('#new-item-link').attr('disabled', false)
  $('#new-item-link').prop('disabled', false)
}

//
//  PUBLIC AND PRIVATE MODES
//

//  setPublicMode()
//    set public mode for navbar and content area

const setPublicMode = () => {
  closeAlert()
  removeView('.edit-item')
  removeView('.add-item')

  // render handlebars template for public nav
  const navTemplate = require('./templates/nav-public.handlebars')
  renderView('.navbar-div', navTemplate())
  // render handlebars template for sign-in/sign-up forms
  const contentTemplate = require('./templates/form-auth.handlebars')
  renderView('.content-div', contentTemplate())
}

//  setPrivateMode()
//    set private mode for navbar and content area

const setPrivateMode = () => {
  closeAlert()
  // render handlebars template for private nav
  const navTemplate = require('./templates/nav-private.handlebars')
  renderView('.navbar-div', navTemplate())
}

//
//  ITEM METHODS
//

//  initGrid()
//    initializes Masonry grid

const initGrid = () => {
  mGrid = new Masonry('.grid', {
    // options...
    itemSelector: '.grid-item', // use a class other than .col-*
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
}

//  showItems(data)
//    show all items for current user

const showItems = (data) => {
  // render handlebars template for private nav

// set preventIndent = true???

  const contentTemplate = require('./templates/item-grid.handlebars')
  const content = contentTemplate({items: data})
  renderView('.content-div', content)
  initGrid()
}

//  showNewItem()
//    show the new item form

const showNewItem = () => {
  // collapse responsive nav
  collapseNavbar()
  // disable new item button
  disableNewItem()
  // render handlebars template for new item form
  const contentTemplate = require('./templates/item-new.handlebars')

  insertView('.content-div', contentTemplate())
  // prependView('.content-div', contentTemplate())
}

//  cancelNewItem()
//    cancel the new item form

const cancelNewItem = () => {
  // re-enable new item button
  enableNewItem()
  // clear new item form element from DOM
  $('.add-item').remove()
}

//  showUpdateItem(event)
//    show the update item form

const showUpdateItem = (event) => {
  // store values from current item to store (for cancel)
  const item = {
    id: $(event.target).closest('.panel').data('id'),
    title: $(event.target).closest('.panel').find('.item-title').text(),
    body: $(event.target).closest('.panel').find('.item-body').html()
  }

  // render handlebars template for edit item form
  const updateTemplate = require('./templates/item-update.handlebars')
  const itemDiv = $(event.target).closest('.show-item')
  removeView(itemDiv)
  insertView('.content-div', updateTemplate(item))
  mGrid.remove(itemDiv)
  mGrid.layout()
  $('html, body').animate({ scrollTop: 0 }, 200)
}

//  saveUpdateItem(item)
//    change from edit to view mode

const saveUpdateItem = (item) => {
  // render handlebars template to show new item
  const viewTemplate = require('./templates/item-show.handlebars')

  const restoreContent = viewTemplate(item)
  $('.edit-item').remove()
  $(restoreContent).insertAfter($('.grid-sizer'))
  mGrid.prepended($('.grid-item').first())
  mGrid.layout()
}

// cancelUpdateItem(event)
//    cancel the update item form

const cancelUpdateItem = (event) => {
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

  // remove edit item div
  $('.edit-item').remove()

  // render handlebars template for original data view
  const viewTemplate = require('./templates/item-show.handlebars')
  const restoreContent = viewTemplate(item)
  $(restoreContent).insertAfter($('.grid-sizer'))

  mGrid.prepended($('.grid-item').first())
  mGrid.layout()
}

//  showChangePasswordSuccess()
//    password changed successfully

const showChangePasswordSuccess = () => {
  // collapse change password dropdown
  $('#change-password-nav').dropdown('toggle')
  $('.navbar-collapse').collapse('hide')
  // clear change password form fields
  $('#change-password input').val('')
  // display successful alert message
  showAlert('info', 'Your password is changed. Hope you remember it.')
}

//  showChangePasswordFailure()
//    password change failed

const showChangePasswordFailure = () => {
  // collapse change password dropdown
  $('#change-password-nav').dropdown('toggle')
  $('.navbar-collapse').collapse('hide')
  // clear change password form fields
  $('#change-password input').val('')
  // display successful alert message
  showAlert(`error`, `For highly complex reasons, your password couldn't be changed.`)
}

// addHandlers()
//    assign event handlers to forms, buttons, and links in the UI

// const initHljs = () => {
//   hljs.configure({
//     tabReplace: '  ',   // 2 spaces
//     classPrefix: '',    // don't append class prefix
//     useBR: true          // … other options aren't changed
//   })
//
//   hljs.configure({useBR: true})
//
//   // $('div.code').each(function(i, block) {
//   //   hljs.highlightBlock(block);
//   // });
//
//   $('body pre code').each(function (i, e) {
//     hljs.highlightBlock(e)
//   })
// }

const addHandlers = () => {
  // hljs.initHighlightingOnLoad()
  // initHljs()

  // add animation to dropdown expand
  $('.navbar-div').on('show.bs.dropdown', '.dropdown', (event) => {
    $(event.target).find('.dropdown-menu').first().stop(true, true).slideDown(250)
  })

  // add animation to dropdown collapse
  $('.navbar-div').on('hide.bs.dropdown', '.dropdown', (event) => {
    event.preventDefault()
    $(event.target).find('.dropdown-menu').first().stop(true, true).slideUp(
      250, () => {
        // close dropdown menu
        $('.dropdown').removeClass('open')
        $('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false')
        // clear fields
        clearForm($(event.target).find('.form').val('id'))
      })
  })
}

module.exports = {
  // escapeHtml,
  // unescapeHtml,
  // cleanBreaks,
  renderView,
  appendView,
  prependView,
  insertView,
  removeView,
  collapseNavbar,
  formAlert,
  clearForm,
  clearFormAlerts,
  showAlert,
  closeAlert,
  closeError,
  confirmDelete,
  disableNewItem,
  enableNewItem,
  setPublicMode,
  setPrivateMode,
  showItems,
  showNewItem,
  cancelNewItem,
  showUpdateItem,
  saveUpdateItem,
  cancelUpdateItem,
  showChangePasswordSuccess,
  showChangePasswordFailure,
  addHandlers
}
