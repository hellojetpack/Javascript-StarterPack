import express from 'express';
import open from 'open';
import compression from 'compression';
import chalk from 'chalk';

const app = express();

app.set('port', 3000);

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => res.render('../dist'));

app.get('/users', (req, res) => {
  // hard coding for simplicity pretend this hits a real DB
  res.json([
    { id: 1, firstName: 'darth', lastName: 'vader', email: 'fake@fake.com' },
    { id: 2, firstName: 'han', lastName: 'solo', email: 'fake@fake.com' },
    { id: 3, firstName: 'luke', lastName: 'skywalker', email: 'fake@fake.com' },
  ]);
});

app.listen(app.get('port'), () => {
  open(`http://localhost:${app.get('port')}`);
  console.log(chalk.green(`Express dist app is running on http://localhost:${app.get('port')}`));
});
