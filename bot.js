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
client.login('process.env.BOT_TOKEN');
