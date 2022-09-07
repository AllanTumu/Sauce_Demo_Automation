import LoginPage from "../pageObjects/loginPageObjects.js"
describe('Login', () => {
  it('Successful Login', () => {
    var username, password, title;
    //intialize objects
    const lp = new LoginPage();
    lp.visit()
    lp.login(
      username, password
    )
    lp.clickLoginButton()
    lp.verifyProductsTitle(
      title
    )
  })

  it('Unsuccesful Login', () => {
    var username, errorMessage, 
    errorMessage1, incorrectPassword;
    //intialize objects
    const lp = new LoginPage();
    lp.visit()
    lp.loginWithoutPassword(
      username, errorMessage
    )
    lp.loginWithWrongPassword(
      username, incorrectPassword, errorMessage1
    )
  })
})