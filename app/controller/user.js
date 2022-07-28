'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const { ctx, service } = this
    const { username, password } = ctx.request.body

    ctx.body = await service.user.login(username, password)
  }

  async register() {
    const { ctx, service } = this
    const { username, password, email } = ctx.request.body

    ctx.body = await service.user.register(username, password, email)
  }
}

module.exports = UserController
