// ES6 module syntax -- transpiling to ES5 needs to work
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// I am ok with writing to the console in the build script
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});