#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n \t 'Welcome to the Word Counter' \n"))


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.magenta ("Enter a paragraph to count the words: ")
    }
])

const words = answers.Sentence.trim().split(" ")

console.log(words)

console.log(chalk.yellow(`Your paragraph word count is ${words.length}`));
