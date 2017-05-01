'use strict'

const response = function (msg, response) {
  console.log(`getItemsSuccess(${JSON.stringify(response.items)})`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

const failure = function (msg, response) {
  console.error(`getItemsSuccess(${JSON.stringify(response.items)})`)
  $('.console').append(JSON.stringify(response) + '<br/>')
}

module.exports = {
  response,
  failure
}
