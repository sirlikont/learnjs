# Learn JavaScript

## Koomiksite scrapimise ülesanne

### Ülesanne
Kirjutada skript, mis laeb koomiksite lehelt koomiksite andmeid (pildi URL, pealkiri ja muu seotud info), kasutades Node.js ja Cheerio teeki.

### Lahendus
Mina valisin koomiksite allikaks [Explosm.net](https://explosm.net/comics/latest), kus avaldatakse Cyanide & Happiness koomikseid.

### Failinimi
Skript asub failis: `scrapeCH.js`

### Kasutatud tehnoloogiad
- Node.js
- Cheerio (HTML parser)
- `fs` moodul vahemälu (cache) salvestamiseks
- `fetch` koomiksilehe sisu allalaadimiseks

### Lehe struktuur
Koomiksite leht asub kujul `https://explosm.net/comics/`, kus URL-i lõpus olev number tähistab konkreetset koomiksit. Käesolevas skriptis laaditakse koomikseid vahemikus **5000 kuni 4991**.

### Välja loetakse:
- koomiksi pildi URL (`img.src`)
- koomiksi pealkiri (`img.title`) – **NB! kuna seda pole siis antakse teada, et see puudub**
- koomiksi alternatiivtekst (`img.alt`) – **NB! kuna seda pole siis antakse teada, et see puudub**
