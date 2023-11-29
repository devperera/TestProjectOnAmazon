// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;
const reports = require('cypress-mochawesome-reporter/plugin');
const resolve = require('resolve');

module.exports = (on: (arg0: string, arg1: any) => void, config: { projectRoot: any; }) => {
    const options = {
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
    };

    on('file:preprocessor', cucumber(options));
    reports(on);
    return config;
};
