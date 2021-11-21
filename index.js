'use strict'
const express = require('express');

const app = new express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/', (req, res) => {

  res.status(200).send('hello world ;|::|');
});

app.listen(PORT, () => {
  console.log(` ${PORT}`);
});