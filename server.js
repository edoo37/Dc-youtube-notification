const { Client, GatewayIntentBits, REST,Routes } = require('discord.js');

const dClient = new Client({intents:32767});


const checkVideo = require('./checkVideo.js')(dClient);



dClient.on('ready', async ()=>{
  console.log(`Logged in as ${dClient.user.tag}`);
  //dClient.checkVideo();

  setTimeout(dClient.checkVideo, 5*1000);
  
});

// dClient.on('message', async()=>{
//   //setInterval(dClient.checkVideo, 5*1000);
// })

// async function main(){
//   const commands = [
//     {
//       name: 'ping',
//       description: 'Replies with Pong!',
//     },
//   ];
  
  const rest = new REST({ version: '10' }).setToken("ODYzMzY1ODI1OTEzMTU5Njgw.GTUHoE.Z7y4YBLJ2A6YWa2m5sVm2MmPNJ_nyZKWnbEPS4");
  
//   try {
//     console.log('Started refreshing application (/) commands.');
  
//     await rest.put(Routes.applicationCommands("YOUR_DISCORD_BOT_ID", "YOUR_DISCORD_CHANNEL_ID"), { body: commands });
  
//     console.log('Successfully reloaded application (/) commands.');

//     dClient.login("YOUR_DISCORD_BOT_TOKEN");
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();
dClient.login("ODYzMzY1ODI1OTEzMTU5Njgw.GeJVs7._JDViPoBLWUgJ-9AppBuonjx-vYYGeU1JQvX0o");
