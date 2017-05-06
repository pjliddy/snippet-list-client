'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config')
// store accesses the client global store object
const store = require('../store')

// signUp(data)
//  POST to base_URI + '/sign-up'

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

// signIn(data)
//  POST to base_URI + '/sign-in'

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

// changePassword(data)
//  PATCH to base_URI + '/change-password/' + user_id

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

// signOut()
//  DELETE to base_URI + '/sign-out/' + user_id

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
