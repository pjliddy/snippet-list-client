'use strict'

const app = require('../app.js')

// store accesses the client global store object
// const store = require('../store.js')

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  app.response('getItemsSuccess:', response)
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  app.failure('getItemsFailure:', error)
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  app.response('getItemSuccess:', response)
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  app.failure('getItemFailure:', error)
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  app.response('createItemSuccess:', response)
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  app.failure('createItemFailure:', error)
}

// updateItemSuccess(response)
//  successful update item

const updateItemSuccess = (response) => {
  app.response('updateItemSuccess:', response)
}

// updateItemFailure(error)
//  error from update item

const updateItemFailure = (error) => {
  app.failure('updateItemFailure:', error)
}

// deleteItemSuccess(response)
//  successful update delete

const deleteItemSuccess = (response) => {
  app.response('deleteItemSuccess:', undefined)
}

// deleteItemFailure(error)
//  error from update delete

const deleteItemFailure = (error) => {
  app.failure('deleteItemFailure:', error)
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
