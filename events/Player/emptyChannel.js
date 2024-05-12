const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `The Channel is Empty join it, and play some music with me 🥂`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
