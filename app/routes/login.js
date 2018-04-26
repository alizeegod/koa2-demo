
/**
 * Created by Administrator on 2018/4/26
 */
import loginController from '../controllers/LoginController'
export default async router => {
    router
        .post('/api/loginUp', loginController.loginUp)
        .post('/api/loginIn', loginController.loginIn)
        .post('/api/loginOut', loginController.loginOut)
}