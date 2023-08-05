const inquirer = require('inquirer');
const createFile = require('./createFile');
const path = require('path');

const kubeFiles = new Map([
    ['Pod', 'pod.txt'],
    ['Deployment', 'deployment.txt'],
    ['Service', 'service.txt'],
]);

async function Kubernetes() {
    const answers = await inquirer.prompt({
        name: 'Kubernetes',
        type: 'list',
        message: 'Please select the configuartion file type',
        choices: ['Pod', 'Deployment', 'Service', 'Exit'],
    });
    if (answers.Kubernetes == 'Exit') {
        process.exit(1);
    }

    const inputFile = path.resolve(
        __dirname,
        '../helper/kubernetes/',
        kubeFiles.get(answers.Kubernetes)
    );

    createFile(inputFile, answers.Kubernetes + '.yml');
}

module.exports = Kubernetes;
