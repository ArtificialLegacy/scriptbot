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

client.on("message", async () => {

});



// Client Login

const token = JSON.parse(fs.readFileSync("./token.json"));
bot.login(token.token);
