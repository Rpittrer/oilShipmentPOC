const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

const Vendor = {
    details: [
        {
            shipmentId: 123,
            description: 'sddd',
            location: 'O',
            date: 'ssdf',
            time: 'ssdff'
        },
        {
            shipmentId: 134,
            description: 'gihdind',
            location: 'D',
            date: 'sgggg',
            time: 'kmkkd'
        }
    ]
};

var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

hbs.registerHelper('list', vendor => {
    var out = '';
   // console.log(vendor);
    for (var i = 0; i < vendor.details.length; i++) {
        out =
            out +
            '<tr>' +
            `<th scope="row"> ${vendor.details[i].shipmentId} </th>
            <td> ${vendor.details[i].description} </td>]
            <td> ${vendor.details[i].location} </td>
            <td> ${vendor.details[i].date} </td>
            <td> ${vendor.details[i].time} </td>` +
            '</tr>';
    }
    return out;
});

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
    res.render('index.hbs', Vendor);
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
