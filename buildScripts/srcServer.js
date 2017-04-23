import chalk from 'chalk';
import open from 'open';
import path from 'path';

import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.set('port', 3000);

app.use(express.static(path.join(__dirname, '../src')));

app.get('/', (req, res) => res.render('../src/index'));

app.listen(app.get('port'), () => {
  open(`http://localhost:${app.get('port')}`);
  console.log(chalk.green(`Express app is running on port ${app.get('port')}`));
});
