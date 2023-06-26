import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
const rps: Array<string> = ["rock", "paper", "scissors"];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription("rock paper scissors!")
    .addStringOption(option => 
        option.setName("choice")
        .setDescription("your choice")
        .addChoices(
            { name: "Rock", value: 'rock' },
            {  name: "Paper", value: 'paper'},
            { name: "Scissors", value: 'scissors' }
        )),
    async execute(interaction){
        const choice: string = interaction.options.getString("choice");
        const botChoice: string = rps[Math.floor((Math.random()*rps.length))];

        if(choice === "rock"){
            if(botChoice === "scissors"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You won!')
                    .setDescription("**You chose**: 🪨\n**I Chose**: ✂️")
                    .setColor('Green')
                ] })
            } else if(botChoice === "rock"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You tied!!')
                    .setDescription("**You chose**: 🪨\n**I Chose**: 🪨")
                    .setColor('Yellow')
                ] })
            } else if(botChoice === "paper"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You lost!')
                    .setDescription("**You chose**: 🪨\n**I Chose**: 📃")
                    .setColor('Red')
                ] })
            }
        } else if(choice === "paper"){
            if(botChoice === "scissors"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You lost!')
                    .setDescription("**You chose**: 📃\n**I Chose**: ✂️")
                    .setColor('Red')
                ] })
            } else if(botChoice === "rock"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You won!')
                    .setDescription("**You chose**: 📃\n**I Chose**: 🪨")
                    .setColor('Green')
                ] })
            } else if(botChoice === "paper"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You tied!')
                    .setDescription("**You chose**: 📃\n**I Chose**: 📃")
                    .setColor('Yellow')
                ] })
            }
        } else if(choice === "scissors"){
            if(botChoice === "scissors"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You tied!')
                    .setDescription("**You chose**: ✂️\n**I Chose**: ✂️")
                    .setColor('Yellow')
                ] })
            } else if(botChoice === "rock"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You lost!')
                    .setDescription("**You chose**: ✂️\n**I Chose**: 🪨")
                    .setColor('Red')
                ] })
            } else if(botChoice === "paper"){
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setTitle('You won!')
                    .setDescription("**You chose**: ✂️\n**I Chose**: 📃")
                    .setColor('Green')
                ] })
            }
        }
    }
}