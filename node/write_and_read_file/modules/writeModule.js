const fs = require('fs').promises;

module.exports = (filePath, content, flag = 'w') => {
  fs.writeFile(filePath, content, { flag: flag });
}