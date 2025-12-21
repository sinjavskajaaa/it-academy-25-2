Feature: '21 vek' Login

  Scenario Outline: As a user <email>, I get message <message>

    Given I am on the website
    When I close cookies and promo modal
    And I open authorization modal window
    And I login with <email> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | email | password             | message                        |
      | tomsmith | Password | Неправильный формат электронной почты |


  Scenario Outline: As a user <phone>, I get message <message>

    Given I am on the website
    When I open authorization modal window
    And I login with <phone>
    Then I should see a flash message saying <message>

    Examples:
      | phone  | message                        |
      | 111111111 | Укажите стандартный код оператора |


