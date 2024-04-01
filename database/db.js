const mongoose = require('mongoose');

const dbPORT = 27017;

const mongoURI = `mongodb://127.0.0.1:${dbPORT}/task-manager`;

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log(`MongoDB running on port: ${dbPORT}`)
    })
    .catch((error) => {
        console.error("Error connecting to MongoDBL ", error)
    });