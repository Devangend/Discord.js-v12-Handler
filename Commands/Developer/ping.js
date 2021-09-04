module.exports = {
  name: "ping",
  description: "return bot ping",
  usage: ")ping",
  aliases: ["beep"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    message.channel.send(`**\`WS Ping :: ${client.ws.ping} ms\`** `)
  }
 }