const express = require('express')
const app = express();
require('./database/db')
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const morgan = require('morgan');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization',"ngrok-skip-browser-warning"],
  }));
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes)


// localhost:4000/auth/register

module.exports = app;