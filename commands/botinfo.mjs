// Import

import settings from '../config.js';
import Command from '../base/command.mjs';



// Setup

const Discord = settings.Discord;
const data = settings.data;
const client = settings.client;



// Main

const botinfo = new Command()
  .setName("botinfo")
  .setCategory("info")
  .setDescription("Shows information about the bot.")
  .setCooldown(60);
  .setAction((tempMessage) => {
    let embed = new Discord.RichEmbed()
      .setTitle("*BotInfo*")
      .setColor("#620b91")
      .addField("Ping", client.ping)
      .addField("Server count", client.guilds.size);
    
    tempMessage.channel.send(embed);
  });



// Export 

export default botinfo;
