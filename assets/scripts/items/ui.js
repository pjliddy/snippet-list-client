'use strict'

//  view controller methods
const view = require('../view')

//  getItemsSuccess(response)
//    successful item index

const getItemsSuccess = (response) => {
  view.showItems(response.items)
}

//  getItemsFailure()
//    error from item index

const getItemsFailure = () => {
  view.showAlert(`error`, `Hmmm. Couldn't get your list of items...`)
}

const createItemSuccess = () => {
  view.enableNewItem()
}
//  createItemFailure()
//    error from create item

const createItemFailure = () => {
  view.showAlert(`error`, `There is a problem creating your snippet.`)
}

//  updateItemSuccess(response)
//    successful update item

const updateItemSuccess = (response) => {
  view.saveUpdateItem(response)
}

//  updateItemFailure()
//    error from update item

const updateItemFailure = () => {
  view.showAlert(`error`, `There is a problem saving your updates.`)
}

//  deleteItemFailure()
//    error from delete item

const deleteItemFailure = () => {
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
