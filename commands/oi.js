const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return membro.roles.remove("744737156471455785")
}