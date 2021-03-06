'use strict';

const chalk = require('chalk')
const app = require('./app')

// import chalk from 'chalk';
// import app from './app';

const port = process.env.PORT;
//const port = 3000;
const
    line = chalk.bold.black('-------------------------'),
    portLabel = 'PORT       :   ';

app.listen(port, (err, res) => {
    if (err) {
        return console.log(line + portLabel + (chalk.bold.red('\nUNDEFINED')) + '\n' + line);
    }
    console.log(line + '\n' + portLabel + (chalk.bold.yellow(port)) + '\n' + line);
})
