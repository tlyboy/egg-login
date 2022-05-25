'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async login(userName, password) {
    const { ctx, app } = this

    if (!userName || !password) {
      return {
        status: -1,
        msg: '用户名密码不能为空！'
      }
    }

    const findOneRes = await ctx.model.User.findOne({ userName })

    if (findOneRes) {
      if (
        userName === findOneRes.userName &&
        password === findOneRes.password
      ) {
        const token = app.jwt.sign({ userName }, app.config.jwt.secret)

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
      status: -1,
      msg: '用户尚未注册！'
    }
  }

  async register(userName, password, email) {
    const { app } = this

    if (!userName || !password || !email) {
      return {
        status: -1,
        msg: '请检查用户名、密码和邮箱是否为空！'
      }
    }

    const findOneRes = await app.model.User.findOne({ userName })

    if (findOneRes) {
      return {
        status: -1,
        msg: '用户已被注册！'
      }
    }

    const createRes = await app.model.User.create({ userName, password, email })

    if (createRes) {
      return {
        status: 1,
        msg: '注册成功！'
      }
    }
  }
}

module.exports = UserService
