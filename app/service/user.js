'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async login(username, password) {
    const { ctx, app } = this

    if (!username || !password) {
      return {
        status: 0,
        msg: '用户名密码不能为空！'
      }
    }

    const findOneRes = await ctx.model.User.findOne({ username })

    if (findOneRes) {
      if (username === findOneRes.username && password === findOneRes.password) {
        const token = app.jwt.sign({ username }, app.config.jwt.secret)

        return {
          status: 1,
          msg: '登录成功！',
          token
        }
      }
      return {
        status: 0,
        msg: '密码错误!'
      }
    }
    return {
      status: 0,
      msg: '用户尚未注册！'
    }
  }

  async register(username, password, email) {
    const { app } = this

    if (!username || !password || !email) {
      return {
        status: 0,
        msg: '请检查用户名、密码和邮箱是否为空！'
      }
    }

    const findOneRes = await app.model.User.findOne({ username })

    if (findOneRes) {
      return {
        status: 0,
        msg: '用户已被注册！'
      }
    }

    const createRes = await app.model.User.create({ username, password, email })

    if (createRes) {
      return {
        status: 1,
        msg: '注册成功！'
      }
    }
  }
}

module.exports = UserService
