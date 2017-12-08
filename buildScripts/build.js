import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

// we dont need this ourselves, but other packages might be looking at this variable
process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    // stats
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        // in case there are multiple errors
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('webpack generated following warnings: '));
        return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }
    console.log(`webpack stats: ${stats}`);
    console.log(chalk.green('App has been built for production and written to /dist directory'));

    return 0;
});