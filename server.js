const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))
// Test get request
app.get('/', (req, res) => res.send('API Running'))

// Routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/clients', require('./routes/api/clients'))
app.use('/api/sfe', require('./routes/api/sfe'))
app.use('/api/university', require('./routes/api/university'))
app.use('/api/users', require('./routes/api/users'))

// If there's no environment, it runs on port 5000
const PORT = process.env.PORT || 5000
// Callback once it connects to the PORT
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
