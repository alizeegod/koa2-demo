
/**
 * Created by alizeegod on 2018/4/26
 */

import Router from 'koa-router'
import initRouter from './routes'
const router = new Router()

initRouter(router)

module.exports = router