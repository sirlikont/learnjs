import { common } from './common.js'; // Import ilma "default"-ita
import es from './es.js';
import './style.css';
import './style.scss';
// Import all of Bootstrap's CSS

console.log("Index.js töötab!");

common.hello();
es.hello();

fetch('https://api.chucknorris.io/jokes/random').then(res =>{
    return res.json();
}).then(data => {
    console.log(data.value);
});

