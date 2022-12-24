const express = require("express")
const dotenv = require('dotenv')
const morgan = require('morgan')
const logger = require('./middleware/logger')

// Route variables 
const profile = require('./routes/profile')

const app = express()

// Dev logging middleware
app.use(logger)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

// Mount Routers
app.use('/api/v1/profile', profile)

// env vars 
dotenv.config({ path: './config/config.env' })



const PORT = process.env.PORT || 5000



app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`))