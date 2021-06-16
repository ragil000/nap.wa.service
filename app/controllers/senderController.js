const Sender = require('../models/senderModel')

// fungsi untuk memanggil fungsi mengirim email
exports.sender = async (result) => {
    try {
        for(let i=0; i<result.receivers.length; i++) {
            let newData = {
                "receiver": result.receivers[i],
                "text": result.message
            }

            // ini fungsi untuk mengirim email
            await Sender.sender(newData)
        }
        return true
    }catch(err) {
        console.log('error:', err, 'data:', result)
        return false
    }
}