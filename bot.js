const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const file = require("./msg.json");
const lemsgs = file.messages;

client.on("error", (e) => {
    console.log(e)
});

client.on("ready", () => {
    console.log("vivaaaaaaaaa")
    client.user.setActivity("ouvindo suas msgs, sdds :pray: / -padero");
});

client.on("message", (msg) => {
    if(msg.author.bot || msg.mentions.members.first() || msg.content.includes(`@everyone`)) return;
    switch(msg.channel.id){
        case '716808248271044661':
        lemsgs.push(msg.content);
        const logger = fs.createWriteStream("./msg.json")
        logger.write(JSON.stringify(file))
        console.log(`Mensagem ${msg} adicionada`)
        break;
        case '717734564126130218':
        const randommsg = lemsgs[Math.floor(Math.random()*lemsgs.length)];
        msg.channel.send(randommsg)
        console.log(`Mensagem ${randommsg} enviada`)
        break;
    }
});

client.login(process.env.token)
