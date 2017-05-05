'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const view = require('../view')

const api = require('./api')
const ui = require('./ui')

const itemApi = require('../items/api')
const itemUi = require('../items/ui')

// onSignUp()
//    handle form submission for user sign up event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()

  if (!data.credentials.email) {
    // view.message('email required')
    view.formAlert('#sign-up', '#sign-up-email')
  } else if (!data.credentials.password) {
    // view.message('password required')
    view.formAlert('#sign-up', '#sign-up-password')
  } else if (!data.credentials.password_confirmation) {
    // view.message('password confirmation required')
    view.formAlert('#sign-up', '#sign-up-password-confirm')
  } else if (data.credentials.password !== data.credentials.password_confirmation) {
    // view.message('passwords must match')
    view.formAlert('#sign-up', '#sign-up-password-confirm')
  } else {
    // make API call and set up handlers for callbacks
    api.signUp(data)
      .then(ui.signUpSuccess)
      .then(() => {
        api.signIn(data)
          .then(ui.signInSuccess)
          .then(() => {
            itemApi.getItems()
              .then(itemUi.getItemsSuccess)
              .catch(itemUi.getItemsFailure)
          })
          .catch(ui.signInFailure)
      })
      .catch(ui.signUpFailure)

      // api.signIn(data)
      //   .then(ui.signInSuccess)
      //   .then(() => {
      //     itemApi.getItems()
      //       .then(itemUi.getItemsSuccess)
      //       .catch(itemUi.getItemsFailure)
      //   })
      //   .catch(ui.signInFailure)
  }
  // if (data.credentials.password === data.credentials.password_confirmation) {
  //   api.signUp(data)
  //     .then(ui.signUpSuccess)
  //     .catch(ui.signUpFailure)
  // } else {
  //   console.log('Passwords must match')
  // }
}

// onSignIn()
//    handle form submission for user sign in event
//    NOTE: REQUIRES INPUT FIELD VALIDATION

const onSignIn = function (event) {
  // prevent default form post
  event.preventDefault()
  // get data object from user sign in form
  const data = getFormFields(this)

  if (!data.credentials.email) {
    view.formAlert('#sign-in', '#sign-in-email')
  } else if (!data.credentials.password) {
    view.formAlert('#sign-in', '#sign-in-password')
  } else {
    api.signIn(data)
      .then(ui.signInSuccess)
      .then(() => {
        itemApi.getItems()
          .then(itemUi.getItemsSuccess)
          .catch(itemUi.getItemsFailure)
      })
      .catch(ui.signInFailure)
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
  $('.content-div').on('submit', '#sign-up', onSignUp)
  $('.content-div').on('submit', '#sign-in', onSignIn)
  $('.navbar-div').on('submit', '#change-password', onChangePassword)
  $('.navbar-div').on('click', '#sign-out-btn', onSignOut)
}

module.exports = {
  addHandlers
}
