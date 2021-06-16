'use strict'
const wbm = require('wbm')

// fungsi untuk mengirim wa
exports.sender = async (result) => {
    try {

        const phones = [result.receiver]
        const message = result.text
        await wbm.send(phones, message)
        // await wbm.end()
        return true
    }catch(err) {
        console.log('error:', err, 'phone:', result.receiver)
        return false
    }
}