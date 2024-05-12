const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "All the commands this bot has!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('This bot is the official Music bot of TheBossKingdom !.\nBest Low ping, and feature rich music bot.\nJoin the support server. [here](https://discord.gg/bosskingdom-comeback-1090560322760347649)')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with heart by Rishab ❤️', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};