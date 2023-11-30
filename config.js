const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "083803383795"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '083803383795' 
global.devs = '083803383795';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Raa3ZSdVZuL2lhbHNON3hHcXRGdy9jUHdsL3hZTFBwY3JBaHRkYTNsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmQ5R0R6cWRVNE5FaERXalUybE5idjdFclJtUUNPbnRScjVtdVhoZ1ZVYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRnBaeUJyY2NwYStETzFpNVl6bGJiUEdibk1lMjFzSCtRU3l5cFhSaVZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQVo4ZytwZFk1cGN4OG96d3Z1UFpaQzZSSGxSVXNPN3BuMEtLY2pQOEFnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFemkyMno0ZHh3V1lQOWRWOVo4aUJTaUFKRGZSdnRRSm5oVkFlWEdiMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU0S2licU1vQVB4Z1FOdnF1aTQvNWJCUkJKRDNFMjcya2VrSXFWYnE5VGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcUFSUzFmRGpmdDlNb0ZzeVhZMkJLcHJKYzZOVWUvNVNwdDJKRUNJSi9TcnBRNXZLc3F2Vkdud0RtQzQvZjVqSTdINDg3cGJSUk1OODd6VTFGSy9nQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwMSwiYWR2U2VjcmV0S2V5IjoidS9FVklOMy9MRXE5NzJLblJPVE9qVDJOQzBiRWNnRGV2R0hpYytBZ2YwWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY2xkV1paMUVRWnFQSkJYdUNmNDVtdyIsInBob25lSWQiOiJjYThjMWU0MS1jODRhLTQyODktYjQ5MC03N2JkODJlNjUyODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXUxYlEyMHdCTS9qQkJMd0h0aVIyOTVmdUc0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNlFRMk9kRUFtVzRWWFZsaWovTVh5cmtwcWs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNR1RrVHdRbXIraXF3WVlBUT09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxERTNVUzdlUjlUOGlaUEUvaXhOVlQyVTA1T01qN0xOMlJ1YkpXQ3JBRHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im4zenQxQS9Zd0ZONEp6MnJlRGhocGoyMXVuZ1QrZmd4ZVVYanhqc1BSVVVOOVJSRVYrVG1ldUp0TjNvQ2JXU05PQ0w0WWpsT3hrbjNEazRSWmM0SkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBdy9xOEZJVW9LdWJ5ZDliczJ1SENJMENIREU5Q3ErZHFUMXExZVNQdDI1ajVBaTZITWdWcys4c0ZnQlRTOTErT3JhZmlrN0U5eUlOSTFCUFFnN3RpZz09In0sIm1lIjp7ImlkIjoiNjI4Mzg1MjY4MjAwODoxNkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgzODUyNjgyMDA4OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN3eE4xRXUza2ZVL0ltVHhQNHNUVlU5bE5PVGpJK3l6ZGtibXlWZ3F3QTcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDEzNTU0MjF9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'KENZ BOT WA',
  packname:  process.env.PACK_NAME || 'KENZBOTWA',
   
  botname:   process.env.BOT_NAME === undefined ? "KENZ BOT WA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KEVIN STORE' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HAI SAYA BOT KENZ BOT WA' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
