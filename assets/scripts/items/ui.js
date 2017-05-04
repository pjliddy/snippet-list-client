'use strict'

const list = require('../app.js')

// store accesses the client global store object
// const store = require('../store.js')

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  const contentTemplate = require('../templates/content.handlebars')
  const content = contentTemplate({ items: response.items })
  $('.content-div').html(content)

  list.succeed('getItemsSuccess:', response)
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  list.fail('getItemsFailure:', error)
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  list.succeed('getItemSuccess:', response)
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  list.fail('getItemFailure:', error)
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  list.succeed('createItemSuccess:', response)
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  list.fail('createItemFailure:', error)
}

// updateItemSuccess(response)
//  successful update item

const updateItemSuccess = (response) => {
  list.succeed('updateItemSuccess:', response)
}

// updateItemFailure(error)
//  error from update item

const updateItemFailure = (error) => {
  list.fail('updateItemFailure:', error)
}

// deleteItemSuccess(response)
//  successful update delete

const deleteItemSuccess = (response) => {
  list.succeed('deleteItemSuccess:', undefined)
}

// deleteItemFailure(error)
//  error from update delete

const deleteItemFailure = (error) => {
  list.fail('deleteItemFailure:', error)
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
