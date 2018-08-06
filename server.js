const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

const Vendor = [
    {
        shipmentId: 123,
        description: 'sddd',
        location: 'O',
        date: 564,
        time: 789
    },
    {
        shipmentId: 134,
        description: 'gihdind',
        location: 'D',
        date: 899,
        time: 786576
    }
];

var app = express();
hbs.registerPartials(__dirname + '/views/partials');

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
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('index.hbs', {Vendor});
});
app.get('/bad', (req, res) => {
    var error = {
        errorMessage: 'Unable to handle request'
    };
    res.send(error);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
