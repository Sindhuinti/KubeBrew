import inquirer from 'inquirer';

async function Tools() {
  const answers = await inquirer.prompt({
    name: 'Tools',
    type: 'list',
    message: 'Please select the DevOps platform',
    choices: ['Docker', 'Kubernetes', 'Exit'],
  });

  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}
