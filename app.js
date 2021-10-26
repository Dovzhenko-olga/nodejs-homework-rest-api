const express = require('express')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()

const authRouter = require('./routes/api/auth')
const contactsRouter = require('./routes/api/contacts')
const usersRouter = require('./routes/api/users')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// let avatars = [];

// app.post('api/contacts', upload.single('avatar'), async (req, res) => {
//   console.log(req.file);
//   const { path: tempDir, originalname } = req.file;
//   const uploadDir = path.join(__dirname, 'public\\avatars', originalname);
//   await fs.rename(tempDir, uploadDir);
//   const image = path.join('product', originalname);
//   const newAvatar = { ...req.body, id: 1, image };
//   avatars.push(newAvatar);
//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: {
//       result: newAvatar
//     }
//   })
// })

app.use('/api/auth', authRouter)
app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message })
})

module.exports = app
