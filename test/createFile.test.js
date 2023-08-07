const fs = require('fs');
const createFile = require('../pkg/createFile'); 

jest.mock('fs');

describe('createFile', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the output file with correct data when fs operations succeed', () => {
    const inputFile = 'input.txt';
    const outputFile = 'output.txt';
    const data = 'Hello, world!';

    fs.readFile.mockImplementation((file, encoding, callback) => {
      expect(file).toBe(inputFile);
      expect(encoding).toBe('utf8');
      callback(null, data);
    });

    fs.writeFile.mockImplementation((file, data, encoding, callback) => {
      expect(file).toBe(outputFile);
      expect(data).toBe('Hello, world!');
      expect(encoding).toBe('utf8');
      callback(null); 
    });

    createFile(inputFile, outputFile);

    
    expect(fs.readFile).toHaveBeenCalledWith(inputFile, 'utf8', expect.any(Function));
    expect(fs.writeFile).toHaveBeenCalledWith(outputFile, 'Hello, world!', 'utf8', expect.any(Function));
  });

});
