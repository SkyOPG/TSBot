import { REST, Routes } from 'discord.js';
import { clientId, token } from '../config.json';
import * as fs from 'node:fs';
import * as path from 'node:path';

const commands = [];
const foldersPath: string = path.join(__dirname, '../commands');
const commandFolders: Array<string> = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath: string = path.join(foldersPath, folder);
	const commandFiles: Array<string> = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath: string = path.join(commandsPath, file);
		const command: any[] & Record<"data", any> & Record<"execute", any> = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded all application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();