'use strict'

const list = require('../list.js')

// store accesses the client global store object
// const store = require('../store.js')

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  list.response('getItemsSuccess:', response)

  // console.log(`getItemsSuccess(${JSON.stringify(response.items)})`)
  // $('#get-items').closest('div').find('.well').html(JSON.stringify(response))
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  list.failure('getItemsFailure:', error)

  // console.log(`getItemsFailure(${JSON.stringify(error)})`)
  // $('#get-items').closest('div').find('.well').html(JSON.stringify(error))
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  list.response('getItemSuccess:', response)

  // console.log(`getItemSuccess(${JSON.stringify(response)})`)
  // $('#get-item').closest('div').find('.well').html(JSON.stringify(response))
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  list.failure('getItemFailure:', error)

  // console.log(`getItemSuccess(${JSON.stringify(error)})`)
  // $('#get-item').closest('div').find('.well').html(JSON.stringify(error))
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  list.response('createItemSuccess:', response)

  // console.log(`createItemSuccess(${JSON.stringify(response)})`)
  // $('#create-item').closest('div').find('.well').html(JSON.stringify(response))
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  list.failure('createItemFailure:', error)

  // console.log(`createItemFailure(${JSON.stringify(error)})`)
  // $('#create-item').closest('div').find('.well').html(JSON.stringify(error))
}

// updateItemSuccess(response)
//  successful update item

const updateItemSuccess = (response) => {
  list.response('updateItemSuccess:', response)

  // console.log(`updateItemSuccess(${JSON.stringify(response)})`)
  // $('#update-item').closest('div').find('.well').html(JSON.stringify(response))
}

// updateItemFailure(error)
//  error from update item

const updateItemFailure = (error) => {
  list.failure('updateItemFailure:', error)

  // console.log(`updateItemFailure(${JSON.stringify(error)})`)
  // $('#update-item').closest('div').find('.well').html(JSON.stringify(error))
}

// deleteItemSuccess(response)
//  successful update delete

const deleteItemSuccess = (response) => {
  list.response('deleteItemSuccess:', undefined)

  // console.log(`deleteItemSuccess(${JSON.stringify(response)})`)
  // $('#delete-item').closest('div').find('.well').html('undefined')
}

// deleteItemFailure(error)
//  error from update delete

const deleteItemFailure = (error) => {
  list.failure('deleteItemFailure:', error)

  // console.log(`deleteItemFailure(${JSON.stringify(error)})`)
  // $('#delete-item').closest('div').find('.well').html(JSON.stringify(error))
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
