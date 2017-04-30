'use strict'

// store accesses the client global store object
const store = require('../store.js')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  console.log(`signUpSuccess(${JSON.stringify(response)})`)
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  console.log(`signUpFailure(${JSON.stringify(error)})`)
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  console.log(`signInSuccess(${JSON.stringify(response.user)})`)
  console.log(`${JSON.stringify(response.user.token)}`)
  // store the user object (data)
  store.user = response.user
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  console.log(`signInFailure(${JSON.stringify(error)})`)
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  console.log(`changePasswordSuccess(${JSON.stringify(response)})`)
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  console.log(`changePasswordFailure(${JSON.stringify(error)})`)
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  console.log(`signOutSuccess(${JSON.stringify(response)})`)
  // remove user from current session store
  store.user = null
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  console.log(`signOutFailure(${JSON.stringify(error)})`)
}

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  console.log(`getItemsSuccess(${JSON.stringify(response.items)})`)
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  console.log(`getItemsFailure(${JSON.stringify(error)})`)
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  console.log(`getItemSuccess(${JSON.stringify(response)})`)
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  console.log(`getItemSuccess(${JSON.stringify(error)})`)
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  console.log(`createItemSuccess(${JSON.stringify(response)})`)
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  console.log(`createItemFailure(${JSON.stringify(error)})`)
}

// updateItemSuccess(response)
//  successful update item

const updateItemSuccess = (response) => {
  console.log(`updateItemSuccess(${JSON.stringify(response)})`)
}

// updateItemFailure(error)
//  error from update item

const updateItemFailure = (error) => {
  console.log(`updateItemFailure(${JSON.stringify(error)})`)
}

// deleteItemSuccess(response)
//  successful update delete

const deleteItemSuccess = (response) => {
  console.log(`deleteItemSuccess(${JSON.stringify(response)})`)
}

// deleteItemFailure(error)
//  error from update delete

const deleteItemFailure = (error) => {
  console.log(`deleteItemFailure(${JSON.stringify(error)})`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
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
