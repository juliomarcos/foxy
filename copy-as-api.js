const fs = require('fs')
const cheerio = require('cheerio');

const $ = cheerio.load(fs.readFileSync(`dist/stories/index.html`));
content = $('code').text();

fs.mkdirSync('dist/api');
fs.writeFileSync('dist/api/stories.json', content);