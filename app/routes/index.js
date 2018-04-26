/**
 * Created by alizeegod on 2018/4/26
 */


import routesLoader from '../utils/routesLoader'

export default router => {
    routesLoader(`${__dirname}`).then(routersList => {
        console.log('initRouter')
    routersList.forEach(initRouter => {
        initRouter.default(router)
})
})
}