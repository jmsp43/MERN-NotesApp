const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.port || 3000

//telling express where to find static files like css or images
app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

app.listen(PORT, () => {
     console.log(`running on port ${PORT}`)
})