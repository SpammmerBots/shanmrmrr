const Discord = require('discord.js');
const Mahmoud = new Discord.Client();

console.log("BOT ONLINE");
 
Mahmoud.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**:heart::speak_no_evil: ممكن اخطفك لحضني **



                               [ https://discord.gg/u7SsvFV ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
Mahmoud.login('process.env.BOT_TOKEN');
