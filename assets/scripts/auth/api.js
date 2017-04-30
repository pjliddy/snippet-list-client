'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config.js')

// store accesses the client global store object
const store = require('../store.js')

// user AJAX methods

// signUp(data)
//  POST to base_URI + '/sign-up'

const signUp = (data) => {
  // debug
  console.log(`signUp(${data})`)

  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

// signIn(data)
//  POST to base_URI + '/sign-in'

const signIn = (data) => {
  // debug
  console.log(`signIn(${data})`)

  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

// changePassword(data)
//  PATCH to base_URI + '/change-password/' + user_id

const changePassword = (data) => {
  // debug
  console.log(`changePassword(${data.passwords})`)

  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

// signOut()
//  DELETE to base_URI + '/sign-out/' + user_id

const signOut = () => {
  // debug
  console.log(`signOut()`)

  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// list AJAX methods

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
  console.log(`getItem(${data})`)

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
  console.log(`createItem(${data})`)

  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getItems,
  getItem,
  createItem
}
