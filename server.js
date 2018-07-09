import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import Router from 'koa-router'
import todos from './routes/todos'
import users from './routes/users'



export const app = new Koa()
app.use(bodyparser())

const router = new Router()
router.use('/todos', todos.routes())
router.use('/users', users.routes(), users.allowedMethods())
app.use(router.routes())
app.listen(4000)
