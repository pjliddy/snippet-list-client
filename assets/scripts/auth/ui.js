'use strict'

// store accesses the client global store object
const store = require('../store')
// view accesses the view controller methods
const view = require('../view')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  view.successMessage('signUpSuccess:', response)
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  view.failureMessage('signUpFailure:', error)
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  store.user = response.user
  view.setPrivateMode()
  view.successMessage('signInSuccess:', response)
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  view.formAlert('#sign-in', '#sign-in-password')

  view.failureMessage('signInFailure:', error)
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  view.changePasswordSuccess()
  // view.successMessage('changePasswordSuccess:', undefined)
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  view.failureMessage('changePasswordFailure:', error)
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  store.user = null
  view.setPublicMode()
  // list.succeed('signOutSuccess:')
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  view.failureMessage.fail('signOutFailure:', error)
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
