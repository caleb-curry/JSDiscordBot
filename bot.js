// External dependencies
var Discord = require('discord.js');
var auth = require('./auth.json');

// Internal dependencies
var command = require('./commands');

// Initialize Discord Bot
var client = new Discord.Client();

client.on('ready', () => {
    console.log('- Connected -');
    console.log(`Logged in as: ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                command.ping(msg);
                break;
            case 'help':
                command.help(msg);
                break;
            case 'kick':
                command.kick(msg, args);
                break;
            case 'ban':
                command.ban(msg, args);
                break;
            // Debugging test command
            case 'test':
                command.test(msg, args);
                break;
            default:
                break;
        }
    }
})

client.login(auth.token);