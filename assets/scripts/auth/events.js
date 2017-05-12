'use strict'

// returns values in a set of form fields as a data object
const getFormFields = require('../../../lib/get-form-fields')
// api and ui methods for authentication
const authApi = require('./api')
const authUi = require('./ui')
// api and ui methods for items
const itemApi = require('../items/api')
const itemUi = require('../items/ui')
// view controller methods
const view = require('../view')

// onSignUp()
//    handle form submission for user sign up event

const onSignUp = function (event) {
  // get data object from sign up form
  const data = getFormFields(event.target)
  // prevent default form post
  event.preventDefault()

  // validate input fields
  if (!data.credentials.email) {
    view.formAlert('#sign-up', '#sign-up-email')
  } else if (!data.credentials.password) {
    view.formAlert('#sign-up', '#sign-up-password')
  } else if (!data.credentials.password_confirmation) {
    view.formAlert('#sign-up', '#sign-up-password-confirm')
  } else if (data.credentials.password !== data.credentials.password_confirmation) {
    view.formAlert('#sign-up', '#sign-up-password-confirm')
  } else {
    // make API calls and set up handlers for callbacks
    authApi.signUp(data)
      // .then(authUi.signUpSuccess)
      .then(() => {
        authApi.signIn(data)
          .then(authUi.signInSuccess)
          .then(() => {
            itemApi.getItems()
              .then(itemUi.getItemsSuccess)
              .catch(itemUi.getItemsFailure)
          })
          .catch(authUi.signInFailure)
      })
      .catch(authUi.signUpFailure)
  }
}

// onSignIn()
//    handle form submission for user sign in event

const onSignIn = function (event) {
  // get data object from sign in form
  const data = getFormFields(this)
  // prevent default form post
  event.preventDefault()

  // validate input fields
  if (!data.credentials.email) {
    view.formAlert('#sign-in', '#sign-in-email')
  } else if (!data.credentials.password) {
    view.formAlert('#sign-in', '#sign-in-password')
  } else {
    // make API calls and set up handlers for callbacks
    authApi.signIn(data)
      .then(authUi.signInSuccess)
      .then(() => {
        itemApi.getItems()
          .then(itemUi.getItemsSuccess)
          .catch(itemUi.getItemsFailure)
      })
      .catch(authUi.signInFailure)
  }
}

// onChangePassword()
//    handle form submission for change password event

const onChangePassword = function (event) {
  // get data object from change password form
  const data = getFormFields(event.target)
  // prevent default form post
  event.preventDefault()
  // validate input fields
  if (!data.passwords.old) {
    view.formAlert('#change-password', '#change-password-old')
  } else if (!data.passwords.new) {
    view.formAlert('#change-password', '#change-password-new')
  } else if (data.passwords.new !== data.passwords.password_confirmation) {
    view.formAlert('#change-password', '#change-password-confirm')
  } else {
    // make API call and set up handlers for callbacks
    authApi.changePassword(data)
      .then(authUi.changePasswordSuccess)
      .catch(authUi.changePasswordFailure)
  }
}

// onSignOut()
//    handle form submission for user sign out event

const onSignOut = function (event) {
  // prevent default form post
  event.preventDefault()

  // make API call and set up handlers for callbacks
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

// addHandlers()
//    assign event handlers to forms, buttons, and links in the UI

const addHandlers = () => {
  // user sign in form submission
  $('.content-div').on('submit', '#sign-in', onSignIn)
  // new user sign up form submission
  $('.content-div').on('submit', '#sign-up', onSignUp)
  // change password form submission
  $('.navbar-div').on('submit', '#change-password', onChangePassword)
  // sign out buton click
  $('.navbar-div').on('click', '#sign-out-btn', onSignOut)

  // tabbed ui toggles
  $('.content-div').on('show.bs.tab', 'a[data-toggle="tab"]', function (event) {
    // clear fields from previous active tab
    $($(event.relatedTarget).attr('href')).find('.form-control').val('')
    // remove validation errors
    view.clearFormAlerts('#' + $($(event.relatedTarget).attr('href')).find('form').attr('id'))
    // close any errors before proceeding
    view.closeError()
  })
}

module.exports = {
  addHandlers
}
