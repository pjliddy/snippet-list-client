'use strict'

// config accesses base_URI for dev or production environment
const config = require('../config.js')

// store accesses the client global store object
const store = require('../store.js')

// signUp(data)
//  POST to base_URI + '/sign-up'

const signUp = (data) => {
  // debug
  console.log(`signUp(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

// signIn(data)
//  POST to base_URI + '/sign-in'

const signIn = (data) => {
  // debug
  console.log(`signIn(${JSON.stringify(data)})`)

  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

// changePassword(data)
//  PATCH to base_URI + '/change-password/' + user_id

const changePassword = (data) => {
  // debug
  // console.log(`changePassword(${data.passwords})`)
  console.log(`changePassword(${JSON.stringify(data.passwords)})`)

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
  // debug
  console.log(`signOut()`)

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
