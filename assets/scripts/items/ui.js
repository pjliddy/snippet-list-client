'use strict'

//  view controller methods
const view = require('../view')

//  getItemsSuccess(response)
//    successful item index

const getItemsSuccess = (response) => {
  // update view state
  view.showItems(response.items)
}

//  getItemsFailure()
//    error from item index

const getItemsFailure = () => {
  // set alert error
  view.showAlert(`error`, `Hmmm. Couldn't get your list of items...`)
}

//  createItemSuccess(response)
//    successful create item

const createItemSuccess = () => {
  // update view state
  view.cancelNewItem()
}

//  createItemFailure()
//    error from create item

const createItemFailure = () => {
  // set alert error
  view.showAlert(`error`, `There is a problem creating your snippet.`)
}

//  updateItemSuccess(response)
//    successful update item

const updateItemSuccess = (response) => {
  // update view state
  view.saveUpdateItem(response)
}

//  updateItemFailure()
//    error from update item

const updateItemFailure = () => {
  // set alert error
  view.showAlert(`error`, `There is a problem saving your updates.`)
}

//  deleteItemFailure()
//    error from delete item

const deleteItemFailure = () => {
  // set alert error
  view.showAlert(`error`, `There is a problem deleting your snippet.`)
}

module.exports = {
  getItemsSuccess,
  getItemsFailure,
  createItemSuccess,
  createItemFailure,
  updateItemSuccess,
  updateItemFailure,
  deleteItemFailure
}
