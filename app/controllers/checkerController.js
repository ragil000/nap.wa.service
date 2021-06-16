const Model = require('../models/scheduleModel')
const Sender = require('./senderController')

// fungsi untuk mengecek apakah ada task mengirim wa atau tidak
const checker = async () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const dayIndex = date.getDay()-1
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const nameDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    // mengecek kedalam database apakah pada rentang waktu jam,menit dan tanggal saat ini ada task wa yang harus dikirim
    // 'scheduleTime.minutes': { $lte: String(parseInt(minutes)+1), $gte: String(parseInt(minutes)-1) } => ini mengecek task pada rentang waktu antara 1 menit sebelum atau 1 menit setelah, ini dilakukan untuk mencegah task yang terlewat karena terhambat mengerjakan task sebelumnya (bisa jadi saat mengirim wa waktunya lama sekali)
    // lastSent: { $ne: `${day}-${month}-${year}` } => khusus untuk task yang sifatnya repeated/berulang dikirim, jadi tidak akan melakukan pengiriman berulang di hari yang sama
    const getData = await Model.find({ platform: 'whatsapp', 'scheduleTime.hours': String(parseInt(hours)), 'scheduleTime.minutes': { $lte: String(parseInt(minutes)+1), $gte: String(parseInt(minutes)-1) }, lastSent: { $ne: `${day}-${month}-${year}` }, status: 'active', softDelete: null }).sort({ receiversCount: 'asc' })
    if(getData.length <= 0) {

      // jika tidak ada task, lakukan lagi pengecekan setelah 3 detik (3000)
      setTimeout(() => {
         checker() 
      }, 3000)

      return true
    }else {
        // jika ada task, lakukan looping ada berapa task yang tertangkap
        for(let i=0; i<getData.length; i++) {

            // cek apakah tasknya bertipe sekali kirim (nonRepeated) atau berulang (repeated)
            if(getData[i].scheduleType == 'nonRepeated') {
                if(getData[i].scheduleTime.days == `${day}-${month}-${year}`) {
                    
                    // ini fungsi untuk mengirim wa
                    await Sender.sender(getData[i])
                    
                    // jika sifatnya sekali kirim (nonRepeated) langsung non aktifkan setelah dikirim
                    await Model.updateOne({ _id: getData[i]._id }, { $set: { 'status': 'nonactive' } })
                }
            }else if(getData[i].scheduleType == 'repeated') {
                if(getData[i].scheduleTime.days.includes(nameDays[dayIndex])) {
                    
                    // ini fungsi untuk mengirim wa
                    await Sender.sender(getData[i])
                    
                    // jika sifatnya berulang (repeated) ubah lastSent menjadi tanggal hari ini, agar tidak berulang dikirim pada hari yang sama
                    await Model.updateOne({ _id: getData[i]._id }, { $set: { 'lastSent': `${day}-${month}-${year}` } })
                }
            }
        }

        // setelah selesai dikerjakan semua task, lakukan pengecekan lagi
        checker()
    }
  }

module.exports = {checker}