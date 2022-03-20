'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const { ctx, service } = this
    ctx.body = await service.user.login()
  }

  async register() {
    const { ctx, service } = this
    ctx.body = await service.user.register()
  }
}

module.exports = UserController
