// command-line user interaction
const chalk = require("chalk");
const inquirer = require("inquirer");
const { trim } = require("lodash");
const error = chalk.bold.red;
const warning = chalk.keyword("orange");

module.exports = {
  chalk,
  error: (err) => console.log(error(err)),
  warning: (war) => console.log(warning(war)),
  prompt: inquirer.prompt,
  run: (env) => {
    const questions = [
      {
        name: "name",
        type: "list",
        choices: env.commands,
        message: "Choice your Micro service from list:",
        validate: function (value) {
          if (trim(value).length > 0) {
            return true;
          } else {
            return "Enter your Micro service.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
