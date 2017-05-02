'use strict'

// store accesses the client global store object
const store = require('../store.js')
const app = require('../app.js')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  app.response('signUpSuccess:', response)
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  app.failure('signUpFailure:', error)
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  app.response('signInSuccess:', response)
  store.user = response.user
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  app.failure('signInFailure:', error)
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  app.response('changePasswordSuccess:', undefined)
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  app.failure('changePasswordFailure:', error)
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  app.response('signOutSuccess:', undefined)
  store.user = null
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  app.failure('signOutFailure:', error)
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
