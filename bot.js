var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    var triggerStrings = ["icannotbelieve", "icantbelieve"];
    var regExp = new RegExp("'", 'g');
    var convertedMsg = message.replace(regExp, "").split(" ").join("").toLowerCase();
    // logger.info('Received message: ' + convertedMsg + 'from ' + user);
    var i;
    for (i = 0; i < triggerStrings.length; i++) {
        if (convertedMsg.search(triggerStrings[i]) != -1 && user != bot.username) {
            bot.sendMessage({
                to: channelID,
                message: "**I can't believe it's not butter!**"
            });
            break;
        }
    }

    // Search for any derivative of indeed.
    var indexOfIndeed = convertedMsg.search("indee");

    if (indexOfIndeed != -1) {
        indexOfIndeed += 5;
        while (indexOfIndeed != convertedMsg.length && convertedMsg[indexOfIndeed] == 'e') {
            indexOfIndeed++;
        }
        if (indexOfIndeed != convertedMsg.length && convertedMsg[indexOfIndeed] == 'd' && user != bot.username) {
            bot.sendMessage({
                to: channelID,
                message: "***:star:INDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEED:star:***"
            });
        }
    }
});
