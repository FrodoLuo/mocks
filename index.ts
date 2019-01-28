import Express, { static as exStatic } from 'express';
import fs from 'fs';

const app = Express();
app.all('*', (req, res) => {
  console.log(new Date().toLocaleString(), req.url);
  const path = req.path;
  try {
    const file = fs.readFileSync(`./mocks${path}.json`);
    res.contentType('application/json').send(file);
  } catch (err) {
    res.status(500).send(err);
  }
})
console.log('Start listening at 4000');
app.listen(4000);