// Import objects

import settings from './config.js';
import commands from './base/commandExport.mjs';



// Setup 

const fs = settings.fs;
const Discord = settings.Discord;
const data = settings.data;
const client = settings.bot;



// Events

client.on("ready", async () => {

});

client.on("guildCreate", async () => {

});

client.on("guildDelete", async () => {

});

client.on("guildMemberAdd", async () => {

});

client.on("message", async (tempMessage) => {
  
  // Command handler
  
    // Parse command
  
  let messageArray = tempMessage.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
    // Get prefix
  
  let prefixes = data.get("prefixes");
  
  if(!prefixes[tempMessage.guild.id]){
    prefixes[tempMessage.guild.id] = {
      "prefix": "!";
    };
  }
  
    // Check if the command can/should run
  
  if(message.author.bot) return;
  if(message.channel.type === "dm"){
    return;
  };
  if(!message.content.startsWith(prefixes[tempMessage.guild.id][tempMessage.author.id].prefix)) return;
  
    // Try to run the command
  
  if(commands.cmd){
    commands.cmd.run(tempMessage, args);
  } else {
    return;
  }
});



// Client Login

const token = JSON.parse(fs.readFileSync("./token.json"));
bot.login(token.token);
