const hbs = require('hbs');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const {
  Vendor,
  Vessel,
  Inspector,
  LoadingPort,
  DischargePort,
  Shipper,
} = require('./src/js/objects');

const app = express();

app.use(express.static(`${__dirname}/`));
app.use(bodyParser.urlencoded({ extended: true }));

hbs.registerPartials(`${__dirname}/views/partials`);

app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', `${log}\n`, (err) => {
    if (err) {
      console.log('Unable to write log');
    }
  });
  next();
});

app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  res.render('index.hbs', {
    Vendor,
    Vessel,
    Inspector,
    LoadingPort,
    DischargePort,
    Shipper,
  });
});

app.post('/index', (req, res) => {
  Vendor.push(req.body);
  res.redirect('/index');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
