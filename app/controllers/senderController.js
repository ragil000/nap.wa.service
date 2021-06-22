const Sender = require('../models/senderModel')

// fungsi untuk mengubah nomor awal menjadi 62
String.prototype.IDNPhoneCode = function() {
    return '62' + this.slice(1);
}

// fungsi untuk memanggil fungsi mengirim email
exports.sender = async (result) => {
    try {
        for(let i=0; i<result.receivers.length; i++) {
            let newData = {
                "receiver": result.receivers[i].IDNPhoneCode(),
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