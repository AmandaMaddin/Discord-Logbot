const Discord = require("discord.js");
const client = new Discord.Client()
var colors = require('colors');
const config = require('./config.json');
client.on('ready', () => {
  console.log(`Logcord - A Discord.js chat logging bot by AmandaMaddin`);
  console.log(`github.com/AmandaMaddin/Discord-Logbot`);
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  console.log("A message was sent in: ".green + `${msg.guild}` + " \nIn the channel: ".green + `${msg.channel.name}`+ "\n" + "Created By: ".red + `${msg.author.username}#${msg.author.discriminator}`+ "\n" + "Time: ".yellow + `${msg.createdAt}` + "\n" + "Message Content: ".blue + `${msg.content}` + "\n");
});

client.login(config.token)
