//Require the correct classes
const {Client, Events, GatewayInentBits} = require('discord.js');
const {token} = require('./confg.json');

//creating a new client instance
const client = new Client({ intents: [GatewayInentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
  console.log('Ready! Logged in as ${readyClient.use.tag}');
})

//Using the token (password) to log into discord
client.login(token);