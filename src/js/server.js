const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials/');

app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', err => {
        if (err) {
            console.log('Unable to write log');
        }
    });
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
    var about = {
        name: 'arpit',
        likes: ['blender', 'node']
    };
    res.render('about.hbs', {
        titleName: 'Good Morning'
    });
});
app.get('/bad', (req, res) => {
    var error = {
        errrorMessage: 'Unable to handle request'
    };
    res.send(error);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
