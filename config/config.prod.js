'use strict'

exports.security = {
  domainWhiteList: ['http://localhost:8080']
}

exports.mongoose = {
  client: {
    url: 'mongodb://root:password@localhost:27017/user?authSource=admin',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options
    plugins: []
  }
}
