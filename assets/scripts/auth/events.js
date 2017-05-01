'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// onSignUp()
//    handle form submission for user sign up event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()

  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    console.log('Passwords must match')
  }
}

// onSignIn()
//    handle form submission for user sign in event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()

  // verify there are email and password values
  if (data.credentials.email.length !== 0 && data.credentials.password.length !== 0) {
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  } else {
    console.log('User name and password required')
  }
}

// onChangePassword()
//    handle form submission for change password event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()

  if (data.passwords.old.length !== 0 && data.passwords.new.length !== 0) {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  } else {
    console.log('old and new password required')
  }
}

// onSignOut()
//    handle form submission for user sign out event
//    NOTE: REQUIRES ARE YOU SURE? VALIDATION

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// addHandlers()
//    assign event handlers to forms, buttons, and links in the UI

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
