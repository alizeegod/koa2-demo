const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const render = require('koa-art-template');

const router = require('./app/router')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors())
app.use(require('koa-static')(__dirname + '/app/public'))

app.use(views(__dirname + '/app/views', {
  extension: 'pug'
}))
// art-template 模版渲染
// render(app, {
//     root: path.join(__dirname, 'view'),
//     extname: '.art',
//     debug: process.env.NODE_ENV !== 'production'
// });

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(router.routes())
    .use(router.allowedMethods())

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
