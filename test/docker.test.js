const inquirer = require('inquirer');
const path = require('path');
const Docker = require('../pkg/docker');

jest.mock('inquirer');

jest.mock('../pkg/createFile');

describe('Docker', () => {
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

  it('should create the Dockerfile with the correct input file when a valid option is selected', async () => {
    
    inquirer.prompt.mockResolvedValueOnce({ Docker: 'Node' });

    await Docker();

    expect(inquirer.prompt).toHaveBeenCalledWith({
      name: 'Docker',
      type: 'list',
      message: 'Please select the language',
      choices: ['Go', 'Java', 'Node', 'Python', 'Exit'],
    });

    expect(require('../pkg/createFile')).toHaveBeenCalledWith(
      path.resolve(__dirname, '../helper/docker/node-docker.txt'),
      'Dockerfile'
    );
  });

  
});
