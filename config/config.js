/**
 * Created by alizeegod on 2018/4/25
 */

module.exports = {

    /*
        DEV环境配置参数
    */
    dev: {
        host         : '',    // 请求PHP接口地址
        port         : '3000',                         // 程序运行接口
        webhost      : {
            fw       : '',
        },
        redis        : {                               // redis 配置参数
            host     : '127.0.0.1',
            port     : '6379',
            password : ''
        },
        mysql        : {                               // mysql 配置参数
            host     : '.mysql.rds.aliyuncs.com',
            user     : '',
            password : '',
            database : ''
        },
        logfile      : './logs/log.log'
    },


    /*
        PROD环境配置参数
    */
    prod : {
        host         : '',
        port         : '3000',
        webhost      : {
            fw       : '',
            ys       : '',
        },
        redis: {
            host     : '.m.cnbja.kvstore.aliyuncs.com',
            port     : '6379',
            password : ''
        },
        mysql: {
            host     : '.mysql.rds.aliyuncs.com',
            user     : '',
            password : '',
            database : ''
        },
        logfile      : './logs/log.log'
    }

}