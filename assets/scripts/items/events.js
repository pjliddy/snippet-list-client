'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const view = require('../view')

// onGetItems()
//    handle form submission for get items index event

const onGetItems = function (event) {
  // event.preventDefault()

  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

// onGetItem()
//    handle form submission for get item event
//    not in use
//
// const onGetItem = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.getItem(data)
//     .then(ui.getItemSuccess)
//     .catch(ui.getItemFailure)
// }

// onCreateItem()
//    handle form submission for create item event

const onCreateItem = function (event) {
  // get data object from sign up form
  const data = getFormFields(event.target)
  // prevent default form post
  event.preventDefault()

  // validate input fields
  if (!data.item.title) {
    view.formAlert('#new-item', '#create-item-title')
  } else {
    // make API calls and set up handlers for callbacks
    api.createItem(data)
      .then(ui.createItemSuccess)
      .then(() => {
        api.getItems()
          .then(ui.getItemsSuccess)
          .catch(ui.getItemsFailure)
      })
      .catch(ui.createItemFailure)
  }
}

// onUpdateItem()
//    handle form submission for update item event

const onUpdateItem = function (event) {
  // get data object from sign up form
  const data = getFormFields(event.target)
  data.item.id = $(event.target).closest('.panel').data('id')
  // prevent default form post
  event.preventDefault()

  // validate input fields
  if (!data.item.title) {
    view.formAlert('#update-item', '#update-item-title')
  } else {
    // make API calls and set up handlers for callbacks
    api.updateItem(data)
      .then(ui.updateItemSuccess)
      .catch(ui.updateItemFailure)
  }
}

// onConfirmDeleteItem
//    confirm user's intent to delete before calling API

const onConfirmDeleteItem = function (event) {
  // show the confirm delete modal
  view.confirmDelete()

  // if modal confirmed, delete item
  $('#delete-modal-confirm').click(function () {
    $('#delete-modal').modal('hide')
    onDeleteItem(event)
  })
}

// onDeleteItem()
//    handle form submission for delete item event

const onDeleteItem = function (event) {
  // create data object from clicked item
  const data = {
    item: {
      id: $(event.target).closest('.panel').data('id')
    }
  }

  // prevent default form post
  event.preventDefault()

  // make API calls and set up handlers for callbacks
  api.deleteItem(data)
    .then(ui.deleteItemSuccess)
    .then(() => {
      api.getItems()
        .then(ui.getItemsSuccess)
        .catch(ui.getItemsFailure)
    })
    .catch(ui.deleteItemFailure)
}

// addHandlers()
//    assign event handlers to forms, buttons, and links in the UI

const addHandlers = () => {
  // new item (add snippet) link clicked
  $('.navbar-div').on('click', '#new-item-link', view.showNewItem)
  // cancel link in new item form clicked
  $('.content-div').on('click', '#create-item-cancel', view.cancelNewItem)
  // create item form submitted
  $('.content-div').on('submit', '#create-item', onCreateItem)

  // edit item link clicked
  $('.content-div').on('click', '.edit-item-link', view.showUpdateItem)
  // cancel link in update item form clicked
  $('.content-div').on('click', '#update-item-cancel', view.cancelUpdateItem)
  // update item form submitted
  $('.content-div').on('submit', '#update-item', onUpdateItem)

  // delete item link clicked
  $('.content-div').on('click', '.delete-item-link', onConfirmDeleteItem)

  // get item form submitted -- not used
  // $('.content-div').on('submit', '#get-item', onGetItem)
}

module.exports = {
  onGetItems,
  addHandlers
}
