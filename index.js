const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', async msg => {
  if (msg.author.bot) return;

  if (msg.content === '!solo') {
    await msg.channel.send({
      embeds: [{
        color: 3447003,
        title: 'DIÁRIO SOLO',
        fields: [
          {name: 'Valores', value: '💰 Inscrição: R$ 1,00\n💀 Por kill: R$ 0,50\n👑 Booyah: R$ 3,00 + kills'},
          {name: 'Exemplo', value: '• 1 kill → R$ 0,50\n• 4 kills + Booyah → R$ 5,00'},
          {name: 'Atenção', value: '✅ Só Full Mobile\n❌ Proibido: Mobilador e Emulador\nModo: Solo'}
        ]
      }]
    });
  }

  if (msg.content === '!duo') {
    await msg.channel.send({
      embeds: [{
        color: 3447003,
        title: 'DIÁRIO DUO',
        fields: [
          {name: 'Valores', value: '💰 Inscrição: R$ 1,50\n💀 Por kill: R$ 0,50\n👑 Booyah: R$ 4,00 + kills'},
          {name: 'Exemplo', value: '• 3 kills + Booyah → R$ 5,50\n• 2 kills → R$ 1,00'},
          {name: 'Atenção', value: '✅ Só Full Mobile\n❌ Proibido: Mobilador e Emulador\nModo: Duo'}
        ]
      }]
    });
  }

  if (msg.content === '!squad') {
    await msg.channel.send({
      embeds: [{
        color: 3447003,
        title: 'DIÁRIO SQUAD',
        fields: [
          {name: 'Valores', value: '💰 Inscrição: R$ 2,00\n💀 Por kill: R$ 0,50\n👑 Booyah: R$ 6,00 + kills'},
          {name: 'Exemplo', value: '• 8 kills + Booyah → R$ 10,00\n• 5 kills → R$ 2,50'},
          {name: 'Atenção', value: '✅ Só Full Mobile\n❌ Proibido: Mobilador e Emulador\nModo: Squad'}
        ]
      }]
    });
  }
});

client.login('917bc94ea79c679cb6435ba612b0b906932c7001d739a6a5951eedaadb38f266')
  .then(() => console.log('✅ BOT LIGADO! 🦈'))
  .catch(erro => console.log('Erro:', erro.message));
          
