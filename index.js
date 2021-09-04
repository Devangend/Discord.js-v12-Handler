const Discord = require("discord.js");
const client = new Discord.Client();
require('discord-buttons')(client);
const { token } = require("./config.json");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldown = new Discord.Collection();

require("dotenv").config();
require("./Handlers/Commands.js")(client);
require("./Handlers/Events.js")(client);

client.login(token);

