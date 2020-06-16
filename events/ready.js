const { client } = require('../index.js');
const chalk = require("chalk");

client.on("ready", async () => {

    console.log(chalk.cyan(`============================================`));
    console.log(chalk.cyan(`||              Gideon#2809               ||`));
    console.log(chalk.cyan(`||       Made by AC Nektarios#1241        ||`));
    console.log(chalk.cyan(`============================================`));


    await client.user.setActivity("Music", {type: "LISTENING"})


});