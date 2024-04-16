const express = require('express')
const app = express();
require('../database/db')
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);

// localhost:4000/auth/register

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})