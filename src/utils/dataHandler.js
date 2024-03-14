const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/database.json');

const readData = async () => {
    const data = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(data);
};

const writeData = async (data) => {
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');
};

module.exports = {
    readData,
    writeData
};