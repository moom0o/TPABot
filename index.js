var mineflayer = require('mineflayer')
const config = require('./config.json')
var bot = mineflayer.createBot({
  host: config.ip, // optional
  port: config.port,       // optional
  username: config.username, // email and password are required only for
  password: config.password,          // online-mode=true servers
  version: config.version                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
})

bot.on('chat', function (username, message) {
  if (username === bot.username) return
  bot.chat(message)
})

bot.on('error', err => console.log(err))
