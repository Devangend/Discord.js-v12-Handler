const Discord = require("discord.js");
const Beautify = require('beautify');
const { owner } = require("../../config.json");

module.exports = {
  name: "eval",
  description: "i forget your epic description is",
  usage: ")eval <code>",
  aliases: ["evals"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    
  if (message.author.id !== owner ) {
    const error = new Discord.MessageEmbed()
    .setDescription('Only my creator can use this commands!')
    .setColor('DARK_BLUE')
  // Check if that your owner id form Config.json
    return message.channel.send(error)
  }
  //---------------------------------------------
  if (!args[0]) {
    return message.channel.send("You need to evaluate **SOMETHING** Please!")
  }
  //---------------------------------------------
  try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }
    
    const toEval = args.join(" ");
    const evaluated = eval(toEval);
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Discord.js Eval")
    .addField("**Input**", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("**Output**",`\`\`\`${evaluated}\`\`\``)
    .setTimestamp()
    .setFooter(`Type: ${typeof(evaluated)}`)
    .setColor('PURPLE')
    message.channel.send(embed);
    
  } catch (e) {
    // Return error when your eval the code
    let errorembed = new Discord.MessageEmbed()
    .setTitle("ERROR!")
    .setDescription(`\`\`\`${e}\`\`\``)
    .setTimestamp()
    .setColor('PURPLE')
    message.channel.send(errorembed);
  }
  //-------------------END-----------------------
  }
 }  
