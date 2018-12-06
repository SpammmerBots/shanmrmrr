const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**:heart::speak_no_evil: ممكن اخطفك لحضني **



                               [ https://discord.gg/u7SsvFV ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.on('guildMemberAdd', member => {
const mahmoud= member.guild.channels.get("512674548382957573");
if(!mahmoud) return;
if(mahmoud) {
setTimeout(() => mahmoud.send(`**# Welllcome , to Mal Shop  🌹 .**`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mahmoud= member.guild.channels.get("513396697406373898");
if(!mahmoud) return;
if(mahmoud) {
setTimeout(() => mahmoud.send(`**# Welllcome , to Maliciouns™  🌹 .**`), 4000)        
}
});







client.login('process.env.BOT_TOKEN');
