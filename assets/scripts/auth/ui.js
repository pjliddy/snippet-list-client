'use strict'

// store accesses the client global store object
const store = require('../store.js')
const list = require('../list.js')

// signUpSuccess(response)
//  successful new user sign up

const signUpSuccess = (response) => {
  list.response('signUpSuccess:', response)
  // console.log(`signUpSuccess(${JSON.stringify(response)})`)
  // $('#sign-up').closest('div').find('.well').html(JSON.stringify(response))
}

// signUpFailure(error)
//  error from new user sign up

const signUpFailure = (error) => {
  list.failure('signUpFailure:', error)
  // console.log(`signUpFailure(${JSON.stringify(error)})`)
  // $('#sign-up').closest('div').find('.well').html(JSON.stringify(error))
}

// signInSuccess(response)
//  successful user sign in

const signInSuccess = (response) => {
  list.response('signInSuccess:', response)
  // console.log(`signInSuccess(${JSON.stringify(response.user)})`)
  // console.log(`${JSON.stringify(response.user.token)}`)
  // $('#sign-in').closest('div').find('.well').html(JSON.stringify(response))
  // store the user object (data)
  store.user = response.user
}

// signInFailure(error)
//  error from user sign in

const signInFailure = (error) => {
  list.failure('signInFailure:', error)

  // console.log(`signInFailure(${JSON.stringify(error)})`)
  // $('#sign-in').closest('div').find('.well').html(JSON.stringify(error))
}

// changePasswordSuccess(response)
//  successful password change

const changePasswordSuccess = (response) => {
  list.response('changePasswordSuccess:', undefined)

  // console.log(`changePasswordSuccess(${JSON.stringify(response)})`)
  // $('#change-password').closest('div').find('.well').html('undefined')
}

// changePasswordFailure(error)
//  error from password change

const changePasswordFailure = (error) => {
  list.failure('changePasswordFailure:', error)

  // console.log(`changePasswordFailure(${JSON.stringify(error)})`)
  // $('#change-password').closest('div').find('.well').html(JSON.stringify(error))
}

// signOutSuccess(response)
//  successful user sign out

const signOutSuccess = (response) => {
  list.response('signOutSuccess:', undefined)

  // console.log(`signOutSuccess(${JSON.stringify(response)})`)
  // $('#sign-out').closest('div').find('.well').html('undefined')
  // remove user from current session store
  store.user = null
}

// signOutFailure(error)
//  error from user sign out

const signOutFailure = (error) => {
  list.failure('signOutFailure:', error)

  // console.log(`signOutFailure(${JSON.stringify(error)})`)
  // $('#sign-out').closest('div').find('.well').html(JSON.stringify(error))
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
