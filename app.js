const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//Connect database
const { mongoose } = require('./config/connectMongoDB')

const indexRouter = require('./routes/index.route')
const usersRouter = require('./routes/users.route')
const authRouter = require('./routes/auth.route')
const uploadRouter = require('./routes/upload.route')
const filesRouter = require('./routes/files.route')
const audioRouter = require('./routes/audio.route')

const app = express()

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('auth', authRouter)
app.use('/upload', uploadRouter)
app.use('/files', filesRouter)
app.use('/audio', audioRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
   next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
   // set locals, only providing error in development
   res.locals.message = err.message
   res.locals.error = req.app.get('env') === 'development' ? err : {}

   // render the error page
   res.status(err.status || 500)
   res.render('error')
})

module.exports = app