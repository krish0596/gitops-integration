const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`Current time: ${currentTime}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
