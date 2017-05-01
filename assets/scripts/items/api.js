'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config.js')

// store accesses the client global store object
const store = require('../store.js')

// getItems(data)
//  GET to base_URI + '/items'

const getItems = () => {
  // debug
  console.log(`getItems()`)

  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// getItems(data)
//  GET to base_URI + '/items/' + item_id

const getItem = (data) => {
  // debug
  console.log(`getItem(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// createItem(data)
//  POST to base_URI + '/items'

const createItem = (data) => {
  // debug
  console.log(`createItem(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

// updateItem(data)
//  PATCH to base_URI + '/items/' + item_id

const updateItem = (data) => {
  // debug
  console.log(`updateItem(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

// deleteItem(data)
//  DELETE to base_URI + '/items/' + item_id

const deleteItem = (data) => {
  // debug
  console.log(`deleteItem(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
}
