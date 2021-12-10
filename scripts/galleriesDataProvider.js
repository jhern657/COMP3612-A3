const path = require('path');
const fs = require('fs');

const galleriesJsonPath = path.join(__dirname, '../data', 'galleries.json');
const galleriesJsonData = fs.readFileSync(galleriesJsonPath, 'utf8');
const galleriesData = JSON.parse(galleriesJsonData);

module.exports = galleriesData;
