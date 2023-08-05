const inquirer = require('inquirer');
const Docker = require('./docker');
const Kubernetes = require('./kubernetes');

async function Tools() {
    const answers = await inquirer.prompt({
        name: 'Tools',
        type: 'list',
        message: 'Please select the DevOps platform',
        choices: ['Docker', 'Kubernetes', 'Exit'],
    });

    if (answers.Tools == 'Exit') {
        process.exit(1);
    }

    if (answers.Tools == 'Docker') {
        Docker();
    }
    if (answers.Tools == 'Kubernetes') {
        Kubernetes();
    }
}

module.exports = Tools;
