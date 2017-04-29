'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // this = event.target
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    console.log('Passwords must match')
  }
}

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

const onChangePassword = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()

  // console.log(`CHANGE PASSWORD: ${data.passwords.old} to ${data.passwords.new}`)

  if (data.passwords.old.length !== 0 && data.passwords.new.length !== 0) {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  } else {
    console.log('old and new password required')
  }
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
