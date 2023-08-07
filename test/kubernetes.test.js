const inquirer = require('inquirer');
const path = require('path');
const Kubernetes = require('../pkg/kubernetes');

jest.mock('inquirer');

jest.mock('../pkg/createFile');

describe('Kubernetes', () => {
  let originalDir;

  beforeAll(() => {
    originalDir = global.__dirname;
    global.__dirname = __dirname;
  });

  afterAll(() => {
    global.__dirname = originalDir;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the yaml file with the correct input file when a valid option is selected', async () => {
    inquirer.prompt.mockResolvedValueOnce({ Kubernetes: 'Pod' });

    await Kubernetes();

    expect(inquirer.prompt).toHaveBeenCalledWith({
      name: 'Kubernetes',
        type: 'list',
        message: 'Please select the configuartion file type',
        choices: ['Pod', 'Deployment', 'Service', 'Exit'],
    });

    expect(require('../pkg/createFile')).toHaveBeenCalledWith(
      path.resolve(__dirname, '../helper/kubernetes/pod.txt'),
      'Pod.yml'
    );
  });

  
});
