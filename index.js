require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Đã đăng nhập với tên ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!hello')) {
    message.reply('Xin chào! Tôi là bot của bạn.');
  }

  if (message.content.startsWith('!ping')) {
    message.reply('PONG!');
  }
});

client.login(process.env.DISCORD_TOKEN);