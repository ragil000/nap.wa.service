const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const wbm = require('wbm')

const Checker = require('./app/controllers/checkerController')

// konfigurasi database mongodb
const mongodbUri = process.env.MONGODB_URL 
mongoose.connect(`mongodb:${mongodbUri}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = global.Promise

// untuk mengecek log
app.use(morgan('dev'))

// start QR code wa
wbm.start()

// memanggil fungsi checker
Checker.checker()

module.exports = app