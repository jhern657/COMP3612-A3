const path = require('path');
const fs = require('fs');

const paintingsJsonPath = path.join(__dirname, '../data', 'paintings-nested.json');
const paintingsJsonData = fs.readFileSync(paintingsJsonPath, 'utf8');
const paintingsData = JSON.parse(paintingsJsonData);


module.exports = paintingsData;
