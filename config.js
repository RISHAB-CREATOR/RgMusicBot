require('dotenv').config();

module.exports = {
    app: {
        // Use the process.env to get the token
        token: process.env.TOKEN,
        playing: 'Music in Servers ✨',
        global: true,
        guild: '1090560322760347649',
        ExtraMessages: false,
        loopMessage: false,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 150,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: false,
        leaveOnEmptyCooldown: 3000,
        leaveOnEnd: false,
        leaveOnEndCooldown: 3000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
