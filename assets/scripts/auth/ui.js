'use strict'

// global store object
const store = require('../store')
// view controller methods
const view = require('../view')

// signUpSuccess()
//    successful new user sign up

const signUpSuccess = () => {
  view.showAlert(`info`, `Welcome to your new Snippet List!`)
}

// signUpFailure()
//    error from new user sign up

const signUpFailure = () => {
  view.showAlert(`error`, `No dice. Something went wrong creating your account.`)
}

// signInSuccess(response)
//    successful user sign in

const signInSuccess = (response) => {
  store.user = response.user
  view.setPrivateMode()
}

// signInFailure()
//    error from user sign in

const signInFailure = () => {
  view.formAlert('#sign-in', '#sign-in-password')
}

// changePasswordSuccess()
//    successful password change

const changePasswordSuccess = () => {
  view.showChangePasswordSuccess()
}

// changePasswordFailure()
//    error from password change

const changePasswordFailure = () => {
  view.showChangePasswordFailure()
}

// signOutSuccess()
//    successful user sign out

const signOutSuccess = () => {
  store.user = null
  view.setPublicMode()
}

// signOutFailure(error)
//    error from user sign out

const signOutFailure = () => {
  view.showAlert(`error`, `Oops. You couldn't be signed out.`)
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
