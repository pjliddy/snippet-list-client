'use strict'

// store accesses the client global store object
const store = require('../store.js')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  console.log(`signUpSuccess(${response})`)
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  console.log(`signUpFailure(${error})`)
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  console.log(`signInSuccess(${response.user})`)
  console.log(`${response.user.token}`)
  // store the user object (data)
  store.user = response.user
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  console.log(`signInFailure(${error})`)
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  console.log(`changePasswordSuccess(${response})`)
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  console.log(`changePasswordFailure(${error})`)
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  console.log(`signOutSuccess(${response})`)
  // remove user from current session store
  store.user = null
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  console.log(`signOutFailure(${error})`)
}

// getItemsSuccess(response)
//  successful item index

const getItemsSuccess = (response) => {
  console.log(`getItemsSuccess(${response.items})`)
}

// getItemsFailure(error)
//  error from item index

const getItemsFailure = (error) => {
  console.log(`getItemsFailure(${error})`)
}

// getItemSuccess(response)
//  successful show item

const getItemSuccess = (response) => {
  console.log(`getItemSuccess(${response})`)
}

// getItemFailure(error)
//  error from show item

const getItemFailure = (error) => {
  console.log(`getItemSuccess(${error})`)
}

// createItemSuccess(response)
//  successful create item

const createItemSuccess = (response) => {
  console.log(`createItemSuccess(${response})`)
}

// createItemFailure(error)
//  error from create item

const createItemFailure = (error) => {
  console.log(`createItemFailure(${error})`)
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
  createItemFailure
}
