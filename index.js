const chalk = require('chalk');
const open = require('open');

const express = require('express');

const app = express();

app.set('port', 3000);

app.use(express.static('./src'));

app.get('/', (req, res) => res.render('./src/index'));

app.listen(app.get('port'), () => {
  open(`http://localhost:${app.get('port')}`);
  console.log(chalk.green(`Express app is running on port ${app.get('port')}`));
});
