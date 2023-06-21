const { Client, GatewayIntentBits } = require('discord.js');
const { channelMention, roleMention, userMention } = require('discord.js');

require('dotenv/config');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    const userId = '908302965553655829'; // Replace with the actual user ID
const taggedUser = `<@${userId}>`; // Use the user ID within <@>

const userId2 = '832877386550607902'; // Replace with the actual user ID
const taggedUserId2 = `<@${userId2}>`; // Use the user ID within <@>

    const { EmbedBuilder } = require('discord.js');
    var channel = client.channels.cache.find(channel => channel.id==='910859839721328650');
    console.log('Bot is online');
    setInterval(() => {
        const embeded = new EmbedBuilder()
                .setTitle(' ʜᴏᴍᴇᴡᴏʀᴋ ʜᴇʟᴘ ʙᴏᴛ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ')
                .setDescription(`1.📌 sᴛᴜᴅᴇɴᴛs ᴀʀᴇ STRICTLY ᴀᴅᴠɪsᴇᴅ ɴᴏᴛ ᴛᴏ ᴡᴏʀᴋ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ɪɴ ᴅᴍs \n 2.📌sᴛᴜᴅᴇɴᴛs ᴀʀᴇ ᴋɪɴᴅʟʏ ʀᴇǫᴜᴇsᴛᴇᴅ ᴛᴏ ᴏᴘᴇɴ ᴀ ᴛɪᴄᴋᴇᴛ ɪɴ <#1078631233854128138>. \n 3.💰ᴛʜɪs ɪs ᴀ ᴘᴀɪᴅ sᴇʀᴠɪᴄᴇ, ɴᴏ ғʀᴇᴇ ʜᴇʟᴘ. \n 4.📌Rᴇᴘᴏʀᴛ ᴛᴏ ${taggedUser} ᴏʀ ${taggedUserId2}  ɪɴ ᴄᴀsᴇ sᴏᴍᴇᴏɴᴇ sᴇɴᴅs ʏᴏᴜ ᴀ ᴅᴍ.\n 5.📌ɪ'ʟʟ ʙᴀɴ ᴀɴʏᴏɴᴇ ғᴏᴜɴᴅ sᴇɴᴅɪɴɢ ᴅᴍs ᴛᴏ sᴛᴜᴅᴇɴᴛs.`)
                .setColor('#B0FC38');
                channel.send({ embeds: [embeded] });
        // channel.send("1)📌sᴛᴜᴅᴇɴᴛs ᴀʀᴇ STRICTLY ᴀᴅᴠɪsᴇᴅ ɴᴏᴛ ᴛᴏ ᴡᴏʀᴋ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ɪɴ ᴅᴍs \n 2)Students are kindly requested to open a ticket in <#1078631233854128138>. \n 3)💰This is paid service, NO FREE HELP. \n 4)Report to  @Schwarz#2466 or @!_ _aarlbog#9492 in case someone sends you a dm. \n 5)I'll ban anyone found sending DMs to students. ");
        }, 3 * 24 * 60 * 60 * 1000);

    // Start the scheduler after the bot is ready
});

client.on('messageCreate', (message) => {
    if (message.content === 'Hello') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('Hello too, Do you need help with your homework?');
    } 
    if (message.content === 'hello') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('Hello too, Do you need help with your homework?');
    } 
    if (message.content === 'Hi') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('Hi too, Do you need help with your homework?');
    } 
    if (message.content === 'hi') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('hi too, Do you need help with your homework?');
    } 
    if (message.content === 'Yes') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('Great, kindly create a ticket in <#1078631233854128138> \n DO NOT WORK WITH ANYONE IN DMs');
    } 
    
    if (message.content === 'yes') {
        console.log('Received "ping" message');
        console.log('Message content:', message.content);
        console.log('Author:', message.author.tag);

        message.reply('Great, kindly create a ticket in <#1078631233854128138> \n DO NOT WORK WITH ANYONE IN DMs');
    } 
    else if (message.content.startsWith('!ban')) {
        // Split the message content to get the mentioned user or user ID
        const args = message.content.split(' ');
        const userToBan = message.mentions.users.first() || client.users.cache.get(args[1]);

        // Check if a user was mentioned or a valid user ID was provided
        if (userToBan) {
            // Get the member object from the user
            const memberToBan = message.guild.members.cache.get(userToBan.id);

            // Check if the member can be banned
            if (memberToBan.bannable) {
                // Ban the member
                memberToBan.ban()
                    .then(() => {
                        message.reply(`I've Successfully banned this SCAMMER!! ${userToBan.tag}. \n Remember to follow all the rules in <#910867018658488371> to avoid being banned. \n 📌Do not DM students \n 📌Do not spam \n 📌Do not advertise your services here 
                        `);
                    })
                    .catch((error) => {
                        console.error('Error banning member:', error);
                        message.reply('An error occurred while banning the member.');
                    });
            } else {
                message.reply('The member cannot be banned.');
            }
        } else {
            message.reply('Please mention a user or provide a valid user ID to ban.');
        }
    }
});


client.login(process.env.TOKEN);




