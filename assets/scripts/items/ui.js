'use strict'

// view accesses the view controller methods
const view = require('../view')

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  view.showItems(response.items)
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  view.failureMessage('getItemsFailure:', error)
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  view.successMessage('getItemSuccess:', response)
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  view.failureMessage('getItemFailure:', error)
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  view.successMessage('createItemSuccess:', response)
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  view.failureMessage('createItemFailure:', error)
}

// updateItemSuccess(response)
//  successful update item

const updateItemSuccess = (response) => {
  view.saveUpdateItem(response)
  view.successMessage('updateItemSuccess:', response)
}

// updateItemFailure(error)
//  error from update item

const updateItemFailure = (error) => {
  view.failureMessage('updateItemFailure:', error)
}

// deleteItemSuccess(response)
//  successful update delete

const deleteItemSuccess = (response) => {
  view.successMessage('deleteItemSuccess:', undefined)
}

// deleteItemFailure(error)
//  error from update delete

const deleteItemFailure = (error) => {
  view.failureMessage('deleteItemFailure:', error)
}

module.exports = {
  getItemsSuccess,
  getItemsFailure,
  getItemSuccess,
  getItemFailure,
  createItemSuccess,
  createItemFailure,
  updateItemSuccess,
  updateItemFailure,
  deleteItemSuccess,
  deleteItemFailure
}
