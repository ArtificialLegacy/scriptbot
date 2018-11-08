const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');

const data = new Enmap({
  provider: new EnmapLevel({
    name: 'data' 
  });
});


const settings = {
  "Discord": Discord,
  "fs": fs,
  "client": client,
  "data": data,
};

module.exports = settings;
