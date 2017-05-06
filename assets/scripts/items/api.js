'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config')
// store accesses the client global store object
const store = require('../store')

// getItems(data)
//  GET to base_URI + '/items'

const getItems = () => {
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
