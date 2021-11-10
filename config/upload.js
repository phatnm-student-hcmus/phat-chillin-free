const crypto = require('crypto')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')
const path = require('path')

const MONGODB_URI = 'mongodb://localhost:27017/mongouploads'

// create storage engine
const storage = new GridFsStorage({
   url: MONGODB_URI,
   file: (req, file) => {
      return new Promise((resolve, reject) => {
         crypto.randomBytes(16, (err, buf) => {
            if (err) {
               return reject(err)
            }
            const filename = buf.toString('hex') + path.extname(file.originalname)
            const fileInfo = {
               filename: filename,
               bucketName: 'uploads'
            }
            resolve(fileInfo)
         })
      })
   }
})
const upload = multer({ storage })

module.exports = {
   upload: upload
}