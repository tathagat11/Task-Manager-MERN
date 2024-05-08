const mongoose = require('mongoose');

const dbPORT = 27017;

// const mongoURI = `mongodb://127.0.0.1:${dbPORT}/task-manager`;

const mongoURI = `mongodb+srv://admin:admin@mern-project.7wxxngm.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Project`;
mongoose
    .connect(mongoURI)
    .then(() => {
        // console.log(`MongoDB running on port: ${dbPORT}`)
    })
    .catch((error) => {
        console.error("Error connecting to MongoDBL ", error)
    });
    
   // mongodb+srv://admin:admin@mern-project.7wxxngm.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Project
