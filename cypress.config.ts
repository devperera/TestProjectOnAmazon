import { defineConfig } from 'cypress';

export default defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    execTimeout: 30000,
    projectId: 'koxama',
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    requestTimeout: 30000,
    pageLoadTimeout: 60000,
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.ts')(on, config);
        },

        // This env part can be overridden by command line variables
        env: {

        },

        specPattern: 'cypress/e2e/**/*.feature',
    },
});
