const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const config = require("../settings/config.json");

function play(message, song) {
    const queue = message.client.queue;
    const guild = message.guild;
    const serverQueue = queue.get(message.guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(message, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    let playingMessage = new Discord.MessageEmbed()
        .setTitle(`🎶 Playing: ${song.title}`)
        .setColor(config.cyan)

    serverQueue.textChannel.send(playingMessage);
}

module.exports = {
    play
}