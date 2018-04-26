
/**
 * Created by alizeegod on 2018/4/26
 */

const glob = require('glob')

export default function (dirname) {
    return new Promise((resolve, reject) => {
        const routers = []
        glob(`${dirname}/*`, { ignore: '**/index.js' }, (err, files) => {
        if (err) {
            reject(err)
        }
        files.forEach(file => {
            const router = require(file)
            routers.push(router)
    })
        resolve(routers)
    })
})
}