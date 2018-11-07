// Description: NodeJS server core file
// Author: rpichioli

const port = 9000;

const express = require('express');
const app = require();

app.get('/', (req, res) => {
  res.send('HTTP server alive!');
});

app.listen(port, () => console.log(`Server listening to port: ${port}`));
