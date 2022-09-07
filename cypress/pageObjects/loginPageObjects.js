/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions for the login page.
 */

/// <reference types="cypress" />

class LoginPage {

    // Open site
    visit() {
      cy.visit('/')
    }

    //Input username and password
    login() {
        //fetch username and password from the json file
        cy.fixture("credentials").then((auth) => {
          var username = auth.standard_user;
          var password = auth.password;
          // input username
          const inputUsernameField = cy.get('input[name="user-name"]')
          inputUsernameField.type(username)
          //input password
          const inputPasswordField = cy.get('input[name="password"]')
          inputPasswordField.type(password)
        });
      }

    //Click login button
    clickLoginButton() {
        const loginButton = cy.get('input[name="login-button"]')
        loginButton.click()
    }

    //Verify Successful login with PRODUCTS title
    verifyProductsTitle() {
        cy.fixture("testData").then((data) => {
            var title = data.dashboard_heading;
            cy.get('span').contains(title)
          });  
    }

    loginWithoutPassword() {
        cy.fixture("credentials").then((auth) => {
            var username = auth.standard_user;
            // input username
            const inputUsernameField = cy.get('input[name="user-name"]')
            inputUsernameField.type(username)

            const loginButton = cy.get('input[name="login-button"]')
            loginButton.click()
          });
        cy.fixture("testData").then((data) => {
            var errorMessage = data.password_required_error;
            cy.get('h3').contains(errorMessage)
        })
    }

    loginWithWrongPassword() {
        cy.fixture("credentials").then((auth) => {
            var username = auth.standard_user;
            var incorrectPassword = auth.wrong_password
            // input username
            const inputUsernameField = cy.get('input[name="user-name"]')
            inputUsernameField.type(username)

            const inputPasswordField = cy.get('input[name="password"]')
            inputPasswordField.type(incorrectPassword)

            const loginButton = cy.get('input[name="login-button"]')
            loginButton.click()
          });
        cy.fixture("testData").then((data) => {
            var errorMessage1 = data.password_matching_error;
            cy.get('h3').contains(errorMessage1)
        })
    }

    loginWithoutUsername() {
        cy.fixture("credentials").then((auth) => {
            var password = auth.password;

            const inputUsernameField = cy.get('input[name="user-name"]')
            inputUsernameField.clear()
            // input username
            const inputPasswordField = cy.get('input[name="password"]')
            inputPasswordField.type(password)

            const loginButton = cy.get('input[name="login-button"]')
            loginButton.click()
          });
          cy.fixture("testData").then((data) => {
            var errorMessage2 = data.username_required_error;
            cy.get('h3').contains(errorMessage2)
        })
    }

    loginWithIncorrectUsername() {
        cy.fixture("credentials").then((auth) => {
            var password = auth.password;
            var IncorrectUsername = auth.wrong_username;

            const inputUsernameField = cy.get('input[name="user-name"]')
            inputUsernameField.clear().type(IncorrectUsername)
            // input username
            const inputPasswordField = cy.get('input[name="password"]')
            inputPasswordField.type(password)

            const loginButton = cy.get('input[name="login-button"]')
            loginButton.click()
          });
          cy.fixture("testData").then((data) => {
            var errorMessage3 = data.username_mismatch_error;
            cy.get('h3').contains(errorMessage3)
        })
    }

    loginUiChecks() {
        const loginLogo = cy.get('.login_logo')
        const inputUsernameField = cy.get('input[name="user-name"]')
        const inputPasswordField = cy.get('input[name="password"]')
        const acceptedUserName = cy.get('.login_credentials')
        const loginButton = cy.get('input[name="login-button"]')

        loginLogo.should('be.visible')
        inputUsernameField.should('be.visible')
        inputPasswordField.should('be.visible')
        acceptedUserName.should('be.visible')
        loginButton.should('be.visible')
        

    }

  }
  export default LoginPage;