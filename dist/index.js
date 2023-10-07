#!/usr/bin/env node
import inquirer from "inquirer";
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "Option",
        choices: ["addition", "sub", "division", "Multiply"],
        message: "Which Function Do You Want:"
    },
    {
        type: "number",
        name: "num1",
        message: "Enter Your First Number: "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Your Second Number: "
    },
]);
if (userInput.Option === "addition") {
    console.log(`${userInput.num1} + ${userInput.num2} = ${userInput.num1 + userInput.num2}`);
}
else if (userInput.Option === "sub") {
    console.log(`${userInput.num1} - ${userInput.num2} = ${userInput.num1 - userInput.num2}`);
}
else if (userInput.Option === "Multiply") {
    console.log(`${userInput.num1} x ${userInput.num2} = ${userInput.num1 * userInput.num2}`);
}
else if (userInput.Option === "division") {
    console.log(`${userInput.num1} ÷ ${userInput.num2} = ${userInput.num1 / userInput.num2}`);
}
