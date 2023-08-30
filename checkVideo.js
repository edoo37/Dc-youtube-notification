const { EmbedBuilder } = require('discord.js');
const Parser = require("rss-parser");
const parser = new Parser();
const fs = require("fs");

module.exports = (dClient) => {
  dClient.checkVideo = async () => {
    try {
      const data = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_YT_CHANNEL_ID');

      const rawData = fs.readFileSync(`${__dirname}/video.json`);
      const jsonData = JSON.parse(rawData);

      console.log(jsonData.id);
      console.log(data.items.length)
      if (data.items.length != 0 && jsonData.id !== data.items[0].id) {
        console.log("if else girdi");
        fs.writeFileSync(
          `${__dirname}/video.json`,
          JSON.stringify({ id: data.items[0].id }),
          (err) => {
            if (err) throw err;
          }
        );
        try {
          const guild = await dClient.guilds.fetch("YOUR_DC_CHANNEL_ID");
          const channel = await guild.channels.cache.get("YOUR_DC_TEXT_CHANNEL_ID");
    
          const {title,link,id,author} = data.items[0];

          const embed = new EmbedBuilder({
            title: title,
            url: link,
            description: 'Create by Yasin Şenel with Node.JS',
            timestamp: Date.now(),
            image: {
              url: `https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`
            },
            author: {
                name: author,
                iconURL: 'YOUR_ICON_URL',
                url: 'YOUR_YT_CHANNEL_URL'
            },
            footer: {
              text: dClient.user.tag,
              iconURL: dClient.user.displayAvatarURL(),
            }
          }
        );
        await channel.send({embeds: [embed]}).catch(console.error);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

  };
};
