#! /usr/bin/env node
import inquirer from 'inquirer';
type answersType={
    num1: number,
    num2: number,
    operation: string
}
inquirer
  .prompt([
    {
        type: "number",
        name:"num1",
        message: "Enter a 1st number",
    },
    {
        type: "number",
        name:"num2",
        message: "Enter a 2nd number",
    },
    {
        type: "list",
        name:"operation",
        message: "Select operation",
        choices:["Addition", "Subtraction", "Multipication","Division"]
    },
  ])
  .then((answers:answersType) => {
    if (answers.operation=="Addition"){
        const result=answers.num1+answers.num2;
        console.log("Sum: ",result);
    }
    else if (answers.operation=="Subtraction"){
        const result=answers.num1-answers.num2;
        console.log("Subtraction: ",result);
    }
    else if (answers.operation=="Multipication"){
        const result=answers.num1*answers.num2;
        console.log("Multipication: ",result);
    }
    else if (answers.operation=="Division"){
        const result=answers.num1/answers.num2;
        console.log("Division: ",result);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });