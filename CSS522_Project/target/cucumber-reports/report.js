$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/target.feature");
formatter.feature({
  "name": "As a customer, I want to search multiple products",
  "description": "  and apply the required filters and add them to the cart.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add first product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "Open the Chrome and go to Target website",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.open_the_chrome_and_go_to_target_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select a category and subcategory",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.select_a_category_and_subcategory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apply filters",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select product",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.add_product_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the product to be searched \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Apply filters to \u003cproduct\u003e \u003cprice1\u003e \u003cprice2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "price1",
        "price2"
      ]
    },
    {
      "cells": [
        "\"TV\"",
        "\"1000\"",
        "\"1500\""
      ]
    },
    {
      "cells": [
        "\"iPad\"",
        "\"500\"",
        "\"1000\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product to be searched \"TV\"",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.enter_the_product_to_be_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apply filters to \"TV\" \"1000\" \"1500\"",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters_to(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_and_add_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" aria-label\u003d\"... for Samsung 75\u0026quot; Smart QLED 4K UHD TV (QN75Q60B) - Titan Gray\" data-test\u003d\"shippingButton\" id\u003d\"addToCartButtonOrTextIdFor87435753\" class\u003d\"BaseButton-sc-j0jbcc-0 ButtonPrimary-sc-1qgspc1-0 fdaZTm eitQue\"\u003eAdd to cart\u003c/button\u003e is not clickable at point (1237, 63). Other element would receive the click: \u003cnav data-test\u003d\"@web/HeaderPrimaryNav\" id\u003d\"headerPrimary\" class\u003d\"styles__StyledNav-sc-vsz4u5-0 nlOoq\"\u003e...\u003c/nav\u003e\n  (Session info: chrome\u003d108.0.5359.98)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [71fd6a68788250d2c06022e392796c41, clickElement {id\u003d772d2035-247a-49dd-8f14-c22ca8e1d99d}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.98, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:56302}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:56302/devtoo..., se:cdpVersion: 108.0.5359.98, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (71fd6a68788250d2c06022e392796c41)] -\u003e xpath: //button[text()\u003d\u0027Add to cart\u0027]]\nSession ID: 71fd6a68788250d2c06022e392796c41\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\n\tat StepDefinition.Target_E2E_Automation.select_and_add_to_cart(Target_E2E_Automation.java:175)\n\tat ✽.Select and add to cart(file:Feature/target.feature:19)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product to be searched \"iPad\"",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.enter_the_product_to_be_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apply filters to \"iPad\" \"500\" \"1000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters_to(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_and_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigate to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "Go to cart",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify cart total",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies Cart Amount",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCartTotalAmount()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify delivery",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies Delivery Fee",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesDeliveryInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies Checkout Button",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCheckoutBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Checkout For Non-Auth Customers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Goes to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesSignInModalForNonAuth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validates Sign In Modal",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.validatesSignInForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close and quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.close_and_quit()"
});
formatter.result({
  "status": "passed"
});
});