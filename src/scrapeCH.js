import * as cheerio from 'cheerio';
import fs from 'fs';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function getCache(name) {
    if (fs.existsSync(`./cache/${name}.html`)) {
        return fs.readFileSync(`./cache/${name}.html`);
    }
    return false;
}

function setCache(name, value) {
    if (!fs.existsSync('./cache')) {
        fs.mkdirSync('./cache');
    }
    fs.writeFileSync(`./cache/${name}.html`, value);
}

for(let i = 5000; i > 4990; i--) {
    
    let data = getCache(i);
    if (!data) {
        await sleep(1000);
       console.log('Laen lehte: ' + i);
       const res = await fetch(`https://explosm.net/comics/${i}/`);
       data = await res.text();
       setCache(i, data);
    } 
    
    const $ = cheerio.load(data);
    const img = $('div#comic img');
    const title = img.attr('title') || '[title puudub]';
    const alt = img.attr('alt') || '[alt puudub]';

    console.log(img.attr('src') || '[src puudub]');
    console.log(title);
    console.log(alt);

    };



