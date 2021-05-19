module.exports = {
    name: 'ping',
    aliases: ['connection', 'con'],
    description: 'Sends pong!',
    execute(client, message, args, Discord){
        message.channel.send('pong!');
    }
}