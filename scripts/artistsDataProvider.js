const path = require('path');
const fs = require('fs');

const artistJsonPath = path.join(__dirname, '../data', 'artists.json');
const artistJsonData = fs.readFileSync(artistJsonPath, 'utf8');
const artistData = JSON.parse(artistJsonData);


module.exports = artistData;



