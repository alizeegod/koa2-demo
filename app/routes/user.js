/**
 * Created by alizeegod on 2018/4/26
 */

import userController from '../controllers/UserController'
export default async router => {
    router
        .get('/api/userInfo/:id', userController.userInfo)
        .get('/api/userList', userController.userList)
}