<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
### TENTANG
Ini adalah salah satu service dari aplikasi penjadwalan pesan dan pengingat (notification app). Silahkan download semua servicenya untuk menjalankan aplikasi ini.

![user dashboard](https://github.com/ragil000/nap.wa.service/blob/master/readme/user-dashboard.png?raw=true)
*Tampilan halaman awal user*

------------


![admin dashboard](https://github.com/ragil000/nap.wa.service/blob/master/readme/admin-dashboard.png?raw=true)
*Tampilan halaman awal admin*

------------

### INSTALASI
1. Pastikan sudah *download* dan *install service* utama [download disini](https://github.com/ragil000/nap.base.service "service whatsapp") serta service email [download disini](https://github.com/ragil000/nap.email.service "service whatsapp").
2. Ubah nama file `dotenv` menjadi `.env`, kemudian ubah isinya.
```javascript
BASE_URL=http://localhost:5000
PORT=5000
MONGODB_URL=[YOUR MONGODB URL]
```
Menjadi seperti contoh ini (contoh menggunakan google smtp),
```javascript
BASE_URL=http://localhost:5000
PORT=5000
MONGODB_URL=mongodb://127.0.0.1:27017/nap
```
*Pastikan MONGO_URL yang dipasang sama dengan MONGO_URL yang dipasang di [service utama](https://github.com/ragil000/nap.base.service "service utama") dan [service email](https://github.com/ragil000/nap.base.service "service utama")*.
3. Lalu gunakan perintah ini `npm install` di terminal untuk menginstall seluruh *dependencies* yang diperlukan.

### MENJALANKAN
1. Jalankan service ini menggunakan perintah `nodemon server`.
2. Scan *QR-Code* yang muncul di terminal menggunakan fitur *whatsapp web* yang ada di aplikasi *whatsapp*.
![QR Code](https://github.com/ragil000/nap.wa.service/blob/master/readme/QR-Code.png?raw=true)
Jika tidak mengeluarkan QR-Code atau error, matikan dengan menekan tombol `ctr+c`. Lalu ulangi jalankan menggunakan perintah diatas.
3. Kemudian lanjutkan untuk menginstall dan menjalankan [service frontend](https://github.com/ragil000/nap.front.service "service frontend").

### LISENSI
Anda diperbolehkan menggunakan proyek ini secara bebas, termasuk juga yang bersifat komersil (tidak termasuk template yang saya gunakan).