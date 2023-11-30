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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJVc0QwYmc2dUZxZHNxa2pIMEdsVnQvVmtVMDEwdW9KSHdZZFhzRkkwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDh0VjAreXNiZEZJRWJqZ09oRXBuYVVuSVZ6eGxWSWQ5U2F1RVVsdU9tZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSlk3bGkyeGpEdzl4RHlhTmZsWUZhVkgvMHhBWnRwL2JrR1dBdEVycjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkYUpocTZrUG5XL21MMmdhRkI0S25vK0hmMlAwVUdJZ3BZQWtpdXE0ODM0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGcUhDRzdERTJMVmRjaStrdjM3RW1QVFpxbEV3Wlk1K3dzb2ZtQ1EzblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZmdzVFMHZ1K0RST2hGNi9OdTcreXBKWEZRL09uZDU2SEJTbFRVRGpjMG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIbmxpTUJBMjRJcWZlT1BaYTlZanhxUkhhYWlqRnhWOURHRDg0enhWRndpcXZtWUhnbWZQOUNqZlpNK0hFQW1lOGhCQXNFakF6NWRTKzUzcTJScWZDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0OSwiYWR2U2VjcmV0S2V5IjoiVDBJVFBuQ1Nvb3NQaFo3SEYvOEhraFZHZnRIaVczYkVNWFFHYnZ0alBtST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieHlqRFhTZ0tTbWFnSWxqejdzcVlzQSIsInBob25lSWQiOiI4YTU5NzFjMC02ZDliLTQ4OTUtYjk2NS1jODllNTZjMzUyODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEZXelpoQ2NDVDN2eG85cjBGa0FFYU5SYW5JPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRXJJM1JVWmYrM0NUa0t5SmJNN3gxVVFwSDA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMK1RrVHdRdVpHaXF3WVlBUT09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxERTNVUzdlUjlUOGlaUEUvaXhOVlQyVTA1T01qN0xOMlJ1YkpXQ3JBRHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhwN0hLVWN6VnU2T2pWeEVURUxidTNHV2hlUVpFTHJpU1NZc3JBZEJjd3FDMW1BRlIwaURvL3N5MEJCWDk3YXNHbGV5YlRiK3Ywa1pKWHI5anpTN0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsMktHQkdWcERteHhmdXhnUTRuRHI1dFJDZ0lReGNHeU1paTQ2MVltaHVqQ3VXQzl1c1ljZktiR0x1c2FRWnBoUktGdkdCUVVtUlBGTjUwVE9TYnlBUT09In0sIm1lIjp7ImlkIjoiNjI4Mzg1MjY4MjAwODoxNEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgzODUyNjgyMDA4OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN3eE4xRXUza2ZVL0ltVHhQNHNUVlU5bE5PVGpJK3l6ZGtibXlWZ3F3QTcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDEzNDk1NjV9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'KENZ BOT WA',
  packname:  process.env.PACK_NAME || 'KENZ-BOT-WA',
   
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
