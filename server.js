const express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send(200).render('index');
});

app.get('*', (req, res) => {
   res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Started at port ${port}`);
});