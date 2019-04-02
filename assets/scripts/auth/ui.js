'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('signup Success', data)
}

const signUpFailure = function (data) {
  console.log('signup Failure', data)
}

const signInSuccess = function (data) {
  console.log('Sign in success', data)
  //  we need to successful login token by this function.
  store.user = data.user
  // debugger
}
const signInFailure = function (data) {
  console.log('Sign in failure', data)
}
const changePwSuccess = function (data) {
  console.log('Change password success', data)
}
const changePwFailure = function (data) {
  console.log('Change password failed!', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure
}
