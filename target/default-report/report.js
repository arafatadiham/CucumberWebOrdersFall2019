$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddOrder.feature");
formatter.feature({
  "name": "Add order",
  "description": "  As use, I want to be able to create new orders",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WebOrdersLogin"
    }
  ]
});
formatter.scenario({
  "name": "1. Create order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebOrdersLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.weborders.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.weborders.step_definitions.LoginStepDefinitions.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Order\" page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters product information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on calculate button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should verify that total 216 is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters address information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters payment information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on process button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user navigates to \"View all orders\" page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user verifies that order is displayed",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});