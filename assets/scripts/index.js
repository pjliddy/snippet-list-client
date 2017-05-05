'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const itemEvents = require('./items/events')
const authEvents = require('./auth/events')

const view = require('./view')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  itemEvents.addHandlers()
  view.setPublicMode()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
