const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
const uri = process.env.URL;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers', 'x-www-form-urlencodedOrigin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, UPDATE, DELETE, OPTIONS');
  next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app;