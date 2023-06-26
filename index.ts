import { Client } from "discord.js";
import { token } from "./config.json";

const client = new Client({
    intents: ["Guilds"]
});

require("./handlers/slash.ts")(client);

client.login(token);