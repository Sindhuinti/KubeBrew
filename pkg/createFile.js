const fs = require('fs');

const createFile = (inputFile, outputFile) => {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error: gg', err);
      process.exit(1);
    } else {
      fs.writeFile(outputFile, data, 'utf8', (err) => {
        if (err) {
          console.error('Error: ', err);
          process.exit(1);
        } else {
          console.log(`File "${outputFile}" created successfully!!!.`);
        }
      });
    }
  });
};

module.exports = createFile;
