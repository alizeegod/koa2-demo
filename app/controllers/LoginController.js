
/**
 * Created by Administrator on 2018/4/26
 */

class LoginController {
    // 注册
    async loginUp (ctx, next) {
        if (Number(ctx.params.id) !== 1) {
            // throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
        }
        ctx.body = { id: 1, name: 'twj', age: 18 }
    }
    // 登录
    async loginIn (ctx, next) {
        let { username, password } = ctx.request.body;

        if (username && username == 'alizeegod' && password && password == '900814') {
            ctx.body = {
                code: 1,
                msg: 'sucess',
                data: {
                    roles: ['admin'],
                    token: 'admin',
                    introduction: '我是超级管理员',
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                    name: 'alizeegod'
                }
            }
        } else {
            ctx.body = {
                code: 0,
                msg: 'fail'
            }
        }
    }
    // 登出
    async loginOut (ctx, next) {
        ctx.body = [{ name: 'twj0', age: 18 }, { name: 'twj1', age: 19 }]
        await next()
    }
}

export default new LoginController()