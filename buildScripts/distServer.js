/* this is to run the production distribution on the local machine -- 
in case there are issues when distributing to producton
*/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

// I am ok with writing to the console in the build script
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    // pretend this is a real database
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@gmail.com" },
        { "id": 3, "firstName": "Tina", "lastName": "Fey", "email": "tina@gmail.com" },
    ]);
});

app.listen(port, function(err) {
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});