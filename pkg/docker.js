const inquirer = require('inquirer');
const createFile = require('./createFile');
const path = require('path');

const dockerFiles = new Map([
    ['Go', 'go-docker.txt'],
    ['Java', 'java-docker.txt'],
    ['Node', 'node-docker.txt'],
    ['Python', 'python-docker.txt'],
]);

async function Docker() {
    const answers = await inquirer.prompt({
        name: 'Docker',
        type: 'list',
        message: 'Please select the language',
        choices: ['Go', 'Java', 'Node', 'Python', 'Exit'],
    });
    if (answers.Docker == 'Exit') {
        process.exit(1);
    }

    const inputFile = path.resolve(
        __dirname,
        '../helper/docker/',
        dockerFiles.get(answers.Docker)
    );
    createFile(inputFile, 'DockerFile');
}

module.exports = Docker;
