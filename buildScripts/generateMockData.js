/* this script generates mock data based on a schema for local development.
It saves you the trouble to point at a possibly non-esistent API while it
provides realistic random data
*/
import jsf from 'json-schema-faker'
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable no-console */

// pass the schema that we defined into the faker
const json = JSON.stringify(jsf(schema));

// and write it to a file db.json
fs.writeFile('./src/api/db.json', json, function(err) {
    if (err)
        return console.log(chalk.red(err));
    else
        console.log(chalk.green("Mock data generated"));
});