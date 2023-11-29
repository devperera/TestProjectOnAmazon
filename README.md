# Cypress-web-test-automation

Test automation solution by using Cypress with Cucumber.
Cypress is a modern way of test automation, which is more focused on developing stable automation scripts.
Cucumber is used to write test scenarios, which gives much more clarity for test scenarios.

## How to set up the project

First of all have to install NodeJS, to use this project.
Navigate to [NodeJS Download](https://nodejs.org/en/download/).
Download according to your OS (Windows, Linux, or IOS).
Once it's been downloaded, verify that it's been installed successfully by running the following command in a terminal,

#### _node --version_
This will return the version of the NodeJS, which has been installed.

Download and save the project into your machine or clone the project for your preffered folder.
Open the terminal from that project saved folder.
Run following sequence of commands, to step up the project.
##### _npm install cypress@12.12.0 --save-dev_
##### _npm install cypress-cucumber-preprocessor --save-dev_
##### _npm install typescript --save-dev_
##### _npm i @types/node --save-dev_

If you want to have HTML report, then only run following
##### _npm i --save-dev cypress-mochawesome-reporter_

If you want have code formatting tool
##### _npm install eslint --save-dev_
##### _npm install "@typescript-eslint/eslint-plugin"_
##### _npm install --save-dev eslint-config-prettier_

## Cypress test execution UI
In Cypress, the default browser is Electron which is similar to Chrome. It will execute with Electron browser,
unless you specifically mention the different browser names.
Cypress comes with the test execution UI, to use it's run the following command from the terminal.
Select the test case you want to run from the test execution UI.
##### _npx cypress open_

This will open the welcome to Cypress UI. Select the E2E from this UI.
This will open the choose a browser UI. Select the browser from this UI.
This will open the E2E spec UI. Select a scenario, then its will start to execute.

## Run test cases from the terminal
1. To run all the test cases from the terminal with headless mode with Electron browser.
   ##### _npx cypress run_
2. To run without headless with Electron browser.
   ##### _npx cypress run --headed_
3. To run a specific browser without headless, Ex; with Chrome browser.
   ##### _npx cypress run --browser chrome --headed_
4. To run a specific browser with headless, Ex; with Chrome browser.
   ##### _npx cypress run --browser chrome_
5. To run specific test case.
   ##### _npx cypress run --spec "cypress/e2e/amazon_feature/shoppingCartTest.feature"_
6. Run specific test case with specific browser headless.
   ##### _npx cypress run --spec "cypress/e2e/amazon_feature/shoppingCartTest.feature" --browser chrome_
7. Run specific test case with specific browser without headless.
   ##### _npx cypress run --spec "cypress/e2e/amazon_feature/shoppingCartTest.feature" --browser chrome --headed_
   
## Run test cases inside the local Docker container
Open the terminal and navigate to the Cypress folder and run following command to get the Cypress version.
   ##### _npx cypress --version_
Ex; if above commands return the version as 12.12.0.
Now run following command with above version, which will run test locally inside the Docker container.
   ##### _docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.12.0_
Note, First its will download the Docker image, if you didn't have it. 
      If its give a permission error, then run its as admin.

## Report generations
Report will be gernated at following location, if you run the test through terminal only.
#### _cypress/reports/html/index.html_
Open the file from the browser to view the report.

## Cucumber - Feature file
In a test case, the Test scenario will be written in the feature, which is supported by Cucumber.
It gives much clarity to test scenarios. So anyone can read it. Also able to use Cucumber features as well.

## Test execution video
**By default Cypress will generate the video of the execution at #### _"cypress\videos"_.**

## Customize Cypress setting according to your needs

1. First open the Cypress test execution UI.
2. Select the setting tab.
3. Click on the configuration option.
4. Now you can see the Cypress settings
   Ex; By default Cypress takes the video output of the test execution.
   Can see about setting here as followed,
   video: true
   So if you want to turn off that option, open the "cypress.json" file and add a line as followed
   "video:false"
