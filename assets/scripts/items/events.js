'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

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
  // const data = getFormFields(event.target)

  const data = {
    item: {
      id: $(event.target).closest('.panel').data('id')
    }
  }

  // debugger
  // api.deleteItem(data)
  //   .then(ui.deleteItemSuccess)
  //   .catch(ui.deleteItemFailure)

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
  $('.content-div').on('submit', '#get-items', onGetItems)
  $('.content-div').on('submit', '#get-item', onGetItem)
  $('.content-div').on('submit', '#create-item', onCreateItem)
  $('.content-div').on('submit', '#update-item', onUpdateItem)
  $('.content-div').on('click', '.delete-item-link', onDeleteItem)
  $('.content-div').on('submit', '#delete-item', onDeleteItem)
}

module.exports = {
  onGetItems,
  addHandlers
}
