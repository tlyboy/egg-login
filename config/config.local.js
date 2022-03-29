'use strict'

exports.mongoose = {
  client: {
    url: 'mongodb://localhost:27017/user',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options
    plugins: []
  }
}
