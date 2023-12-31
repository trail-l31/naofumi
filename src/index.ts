import { Bot } from './bot';
import PingCommand from './commands/ping_command';
import { Config } from './config';
import { Client } from 'discord.js';

const config: Config = Config.getInstance();
const bot: Bot = new Bot();

bot.on('ready', () => {
        bot.addCommand(new PingCommand(), config.guildID);
        bot.handleCommands();
})

bot.login(config.token);
