Feature: As a customer, I want to search multiple products
  and apply the required filters and add them to the cart.

  @Test1
  Scenario: Add first product to cart
    Given Open the Chrome and go to Target website
    When Select a category and subcategory
    And Apply filters
    And Select product
    Then Take Screenshot
    And  Add product to cart

  @Test2
  Scenario Outline: Add second product to the cart
    Given Go to home page
    When Enter the product to be searched <product>
    And Apply filters to <product> <price1> <price2>
    Then Take Screenshot
    And Select and add to cart
    Examples:
      | product | price1 | price2 |
      | "TV"    | "1000" | "1500" |
      | "iPad"  | "500"  | "1000" |


  @Test3
  Scenario: Verify if the cart has all the items
    Given Go to cart
    Then Take Screenshot
    And Close and quit




