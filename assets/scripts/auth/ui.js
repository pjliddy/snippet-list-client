'use strict'

// store accesses the client global store object
const store = require('../store.js')
const list = require('../app.js')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  list.succeed('signUpSuccess:', response)
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  list.fail('signUpFailure:', error)
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  list.succeed('signInSuccess:', response)
  store.user = response.user
  list.setPrivateMode()
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  list.fail('signInFailure:', error)
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  list.succeed('changePasswordSuccess:', undefined)
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  list.fail('changePasswordFailure:', error)
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  list.setPublicMode()
  // list.succeed('signOutSuccess:')
  store.user = null
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  list.fail('signOutFailure:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
