// This script generates mock data for local development
// this way you dont have to pint to an actual api
// but, you can enjoy realistic and randomized data,
// and rapid page load speeds.

import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';
import schema from './mockDataSchema';

jsf.extend('faker', () => faker);

jsf(schema).then((sample) => {
  fs.writeFile('./src/api/db.json', JSON.stringify(sample), (err) => {
    if (err) {
      return console.log(chalk.red(err));
    }
    return console.log(chalk.green('Mock data generated!'));
  });
});
