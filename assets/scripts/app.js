'use strict'

const response = (msg, response) => {
  console.log(`${msg}: ${JSON.stringify(response.items)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const failure = (msg, response) => {
  console.error(`${msg}: ${JSON.stringify(response.items)}`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const onShowSignUp = () => {
  response('onShowSignUp', '')
}

const onShowSignIn = () => {
  response('onShowSignIn', '')
}

const addHandlers = () => {
  // $('#sign-up-nav').on('click', onShowSignUp)
  // $('#sign-in-nav').on('click', onShowSignIn)
}

module.exports = {
  response,
  failure,
  addHandlers
}
