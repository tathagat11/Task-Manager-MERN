const express = require('express')
const app = express();
require('../database/db')

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})