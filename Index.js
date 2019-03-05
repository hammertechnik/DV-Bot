const Discord = require("discord.js");

const TOKEN = "NDU2MTgzMTQzNTQ4ODQ2MDgw.DgG1Mw.shhXDKixE_CzzYtflddZe-Qm5OQ";
const PREFIX = ".dv"
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "hello":
        message.channel.sendMessage("Hi there!");
            break;
        case "website":
            var embed = new Discord.RichEmbed()
                .setDescription("https://sites.google.com/view/dvbot")
            message.channel.sendEmbed(embed);
            break;
        case "hi":
        message.channel.sendMessage("Hi i'm DV! I'm here to help if you ever need it! Also we will be adding more as needed so join the DV Bot discord to reccomend it (Link below!) so hope you like me! Bye");
        break;
        case "mouse":
        message.channel.sendMessage("Hi !");
        break;
        case "rules":
            var embed = new Discord.RichEmbed()
                .setDescription("1. Please be respectful 2. Conatct MODS with questions with the @Mods tag 3. DO NOT DM ALEX 4. Have fun play games!")
            message.channel.sendEmbed(embed);
            break;

         case "twitch":
         message.channel.sendMessage("Glad you asked it's twitch.tv/defiant_videos!");
             break;
         case "stream":
         message.channel.sendMessage("Nope I'm not streaming watch our twitter for more info if we go live!");
             break;
         case "twitter":
         message.channel.sendMessage("https://twitter.com/defiant_videos");
             break;
         case "defiantjoin":
         message.channel.sendMessage("Check Applications and find the application there!");
             break;
         case "help":
         var embed = new Discord.RichEmbed()
         .setDescription("My prefix is .dv, Current commands are .dvhello, .dvwebsite, .dvhi, .dvrules, .dvtwitch, .dvstream, .dvtwitter, .dvdefiantjoin, .dvhelp (duh), .dvdefiant, .dvserver, .dvsuggest")
         message.channel.sendEmbed(embed);
        break;
        case "u":
        message.channel.sendMessage("@everyone New Update has been released now at v1.3.1 check the website for more details!");
        break;
        case "defiant":
         message.channel.sendMessage("The list of Defiant Members has been Dm'd to you!");
         message.member.send("Current Defiant Members are, Joe, Alex, Thias, Diamond, Batdude, Mouse, Andrew!")
             break;
        case "server":
         message.channel.sendMessage("Join our server at the link dm'ed to you!");
         message.member.send("Here is our offical server link! https://discord.gg/FsCgQ9V")
            break;
        case "warn":
         message.channel.sendMessage("Join our server at the link dm'ed to you!");
         message.member.send("Here is our offical server link! https://discord.gg/FsCgQ9V")
            break;
        case "suggest":
         message.channel.sendMessage("Send us a Suggestion over at the dm'd link!");
         message.member.send("Have a Suggestion? Submit it at this link! https://goo.gl/forms/VIOtBytZaDqtB4zw2")
            break;    
        case "o":
            message.channel.sendMessage("Bot is Online version 1.3.1");
            break;
         default:
         message.channel.sendMessage("This command is not Recognized use .dvsuggest to give us an idea!");
    }
    
});

bot.login(TOKEN);