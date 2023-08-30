const { Client, GatewayIntentBits, REST } = require('discord.js');

const dClient = new Client({intents:32767});


const checkVideo = require('./checkVideo.js')(dClient);



dClient.on('ready', async ()=>{
  console.log(`Logged in as ${dClient.user.tag}`);
  setTimeout(dClient.checkVideo, 5*1000);
  
});


  
  const rest = new REST({ version: '10' }).setToken("YOUR_DC_BOT_TOKEN");
  

dClient.login("YOUR_DC_BOT_TOKEN");
