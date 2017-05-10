'use strict'

// global store object
const store = require('../store')
// view controller methods
const view = require('../view')

// signUpFailure()
//    error from new user sign up

const signUpFailure = () => {
  // set alert error
  view.showAlert(`error`, `No dice. Something went wrong creating your account.`)
  // clear sign up form
  view.clearForm('#sign-up')
}

// signInSuccess(response)
//    successful user sign in

const signInSuccess = (response) => {
  // store current user
  store.user = response.user
  // set app to private mode
  view.setPrivateMode()
}

// signInFailure()
//    error from user sign in

const signInFailure = () => {
  // set alert error
  view.showAlert(`error`, `Looks like those are some bad credentials.`)
  // clear sign up form
  view.clearForm('#sign-in')
}

// changePasswordSuccess()
//    successful password change

const changePasswordSuccess = () => {
  // update view state
  view.showChangePasswordSuccess()
}

// changePasswordFailure()
//    error from password change

const changePasswordFailure = () => {
  // update view states
  view.showChangePasswordFailure()
}

// signOutSuccess()
//    successful user sign out

const signOutSuccess = () => {
  // clear current user
  store.user = null
  // set app to public mode
  view.setPublicMode()
}

// signOutFailure(error)
//    error from user sign out

const signOutFailure = () => {
  // set alert error
  view.showAlert(`error`, `Oops. You couldn't be signed out.`)
}

module.exports = {
  // signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
