const mongoose = require('mongoose')

//connect mongoDB
const dbName = 'files-uploads'
const MONGODB_URI = `mongodb+srv://nmphat-mongodb:v!npXf9X277i_XQ@test.vhxrf.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
   console.log("DB connected")
})

module.exports = {
   db: db,
   mongoose: mongoose,
}