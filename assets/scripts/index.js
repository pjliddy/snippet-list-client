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
  view.addHandlers()
  view.setPublicMode()
})

// Applied globally on all textareas with the "autoExpand" class

// $(document)
//     .on('focus.autoExpand', 'textarea.autoExpand', function(){
//         var savedValue = this.value;
//         this.value = '';
//         this.baseScrollHeight = this.scrollHeight;
//         this.value = savedValue;
//     })
//     .on('input.autoExpand', 'textarea.autoExpand', function(){
//         var minRows = this.getAttribute('data-min-rows')|0, rows;
//         this.rows = minRows;
//         rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
//         this.rows = minRows + rows;
//     });

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
