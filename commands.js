module.exports = 
{
    ping: function (msg) {
        msg.reply('Pong!');
    },

    help: function (msg) {
        msg.reply('\n================================================================\n' + 
                  'Commands: ' + 
                  '\n================================================================\n' + 
                  '!help - Get command help. \n' + 
                  '!ping - Check to see if the bot is responding, Will return Pong!\n' +
                  '!kick <@name> <reason> - Kick a member from the server\n' +
                  '!ban <@name> <days> <reason> - Ban a member from the server\n'
        );
    },

    kick: function (msg, args) {
        args.shift();
        var reason = "";
        args.forEach(element => {
            reason += element;
            reason += " ";
        });
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
            if(member) {
                member
                    .kick(`${reason}`)
                    .then(() => {
                        msg.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        msg.reply('I was unable to kick the member');
                        console.error(err);
                    });
            }
            else {
                msg.reply("That user isn't in this guild!");
            }
        }
        else {
            msg.reply("You didn't mention the user to kick!");
        }
    },

    ban: function (msg, args) {
        args.shift();
        const days = args[0]
        args.shift();
        var reason = "";
        args.forEach(element => {
            reason += element;
            reason += " ";
        });
        console.log("Reason: " + reason);
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
            if (member) {
                member
                    .ban({
                        days: days,
                        reason: `${reason}`,
                    })
                    .then(() => {
                        msg.reply(`Successfully banned ${user.tag}`);
                    })
                    .catch(err => {
                        msg.reply("I was unable to ban the member");
                        console.error(err);
                    });
            }
            else {
                msg.reply("That user isn't in this guild!");
            }
        }
        else {
            msg.reply("You didn't mention the user to ban!");
        }
    },

    test: function (msg, args) {
        console.log("Test!");
    }
}