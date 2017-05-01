'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// onGetItems()
//    handle form submission for get items index event

const onGetItems = function (event) {
  event.preventDefault()

  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

// onGetItem()
//    handle form submission for get item event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onGetItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.getItem(data)
    .then(ui.getItemSuccess)
    .catch(ui.getItemFailure)
}

// onCreateItem()
//    handle form submission for create item event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.createItemFailure)
}

// onUpdateItem()
//    handle form submission for update item event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onUpdateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateItem(data)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
}

// onDeleteItem()
//    handle form submission for delete item event
//    NOTE: REQUIRES INPUT FIELD VALIDATION & CONFIRMATION

const onDeleteItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.deleteItem(data)
    .then(ui.deleteItemSuccess)
    .catch(ui.deleteItemFailure)
}

// addHandlers()
//    assign event handlers to forms, buttons, and links in the UI

const addHandlers = () => {
  $('#get-items').on('submit', onGetItems)
  $('#get-item').on('submit', onGetItem)
  $('#create-item').on('submit', onCreateItem)
  $('#update-item').on('submit', onUpdateItem)
  $('#delete-item').on('submit', onDeleteItem)
}

module.exports = {
  addHandlers
}
