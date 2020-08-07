var mineflayer = require('mineflayer')
const config = require('./config.json')
const whitelist = require('./whitelist.json')
var bot = mineflayer.createBot({
  host: config.ip, // optional
  port: config.port,       // optional
  username: config.username, // email and password are required only for
  password: config.password,          // online-mode=true servers
  version: config.version                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
})

bot.chatAddPattern(/^([^ ]*) wants to teleport to you\.$/, 'tpa', 'tpa message')
bot.on('tpa', (username, message, type, rawMessage, matches) => {
  if(whitelist.contains(username)){
  bot.chat(`/msg ${username} Autoaccepting!`)
  setTimeout(() => {
  bot.chat(`/tpy ${username}`)
  }, 1 * 1000)
  }
})

bot.on('error', err => console.log(err))
