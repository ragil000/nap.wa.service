const http = require('http')
const env = require('dotenv')

env.config()

const app = require('./app')
const port = process.env.PORT
const server = http.createServer(app)

server.listen(port)

// const wbm = require('wbm')

// wbm.start().then(async () => {
//     const phones = ["6282311463010"]
//     const message = "hello"
//     await wbm.send(phones, message)
//     await wbm.end()
// }).catch((err) => console.log('error:', err))