/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const {
    copy
} = require('fs-extra')
const glob = require('glob')

const copyStyle = () => {
    glob(`./src/**/*`, (err, files) => {


        for (let i = 0; i < files.length; i += 1) {
            const filename = files[i]

            if (/\.(less|scss)$/.test(filename)) {
                copy(filename, filename.replace(/src\//, 'esm/src/'))
                copy(filename, filename.replace(/src\//, 'lib/src/'))
            }
        }
    })

}
module.exports = {
    copyStyle: copyStyle
}