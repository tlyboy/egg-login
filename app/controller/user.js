'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const { ctx, service } = this
    const { userName, password } = ctx.request.body

    ctx.body = await service.user.login(userName, password)
  }

  async register() {
    const { ctx, service } = this
    const { userName, password, email } = ctx.request.body

    ctx.body = await service.user.register(userName, password, email)
  }
}

module.exports = UserController
