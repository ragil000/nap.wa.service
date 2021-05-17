const express = require('express')
const app = express()
const morgan = require('morgan')
const wa = require('./app/controllers/senderWA')

app.use(morgan('dev'))

wa.send()

// handle error
app.use((request, response, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({
        error: {
            message: error.message || 'Server error'
        }
    })
})

module.exports = app