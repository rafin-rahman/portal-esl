const express = require('express')
const connectDB = require('./config/db')
const app = express()

// COnnect database
connectDB()
// Test get request
app.get('/', (req, res) => res.send('API Running'))
// If there's no environment, it runs on port 5000
const PORT = process.env.PORT || 5000
// Callback once it connects to the PORT
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
