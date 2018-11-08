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
    let embed = new Discord.RichEmbed();
  });
