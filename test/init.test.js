const inquirer = require('inquirer');
const Tools = require('../pkg/init'); 

jest.mock('inquirer');

jest.mock('../pkg/docker', () => jest.fn());
jest.mock('../pkg/kubernetes', () => jest.fn());

describe('Tools', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call Docker function when "Docker" is selected', async () => {
    inquirer.prompt.mockResolvedValueOnce({ Tools: 'Docker' });

    await Tools();

    expect(inquirer.prompt).toHaveBeenCalledWith({
      name: 'Tools',
      type: 'list',
      message: 'Please select the DevOps platform',
      choices: ['Docker', 'Kubernetes', 'Exit'],
    });

    expect(require('../pkg/docker')).toHaveBeenCalled();
  });

  it('should call Kubernetes function when "Kubernetes" is selected', async () => {
    inquirer.prompt.mockResolvedValueOnce({ Tools: 'Kubernetes' });

    await Tools();

    expect(inquirer.prompt).toHaveBeenCalledWith({
      name: 'Tools',
      type: 'list',
      message: 'Please select the DevOps platform',
      choices: ['Docker', 'Kubernetes', 'Exit'],
    });

    expect(require('../pkg/kubernetes')).toHaveBeenCalled();
  });

  it('should exit the process when "Exit" is selected', async () => {
    inquirer.prompt.mockResolvedValueOnce({ Tools: 'Exit' });

    const originalProcessExit = process.exit;
    process.exit = jest.fn();

    await Tools();

    expect(inquirer.prompt).toHaveBeenCalledWith({
      name: 'Tools',
      type: 'list',
      message: 'Please select the DevOps platform',
      choices: ['Docker', 'Kubernetes', 'Exit'],
    });

    expect(process.exit).toHaveBeenCalledWith(1);

    process.exit = originalProcessExit;
  });
});
