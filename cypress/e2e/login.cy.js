import LoginPage from "../pageObjects/loginPageObjects.js"
describe('Login Tests ', () => {

  beforeEach(() => {
    const lp = new LoginPage();
    lp.visit() 
  })
  //Variables 
  var username, password, title,
  errorMessage, errorMessage1, errorMessage2, 
  incorrectPassword,incorrectUsername, errorMessage3;

  it('Successful Login', () => {
    //intialize objects
    const lp = new LoginPage();
    lp.login(
      username, password
    )
    lp.clickLoginButton()
    lp.verifyProductsTitle(
      title
    )
  })

  it('Unsuccesful Login', () => {
    //intialize objects
    const lp = new LoginPage();
    lp.loginWithoutPassword(
      username, errorMessage
    )
    lp.loginWithWrongPassword(
      username, incorrectPassword, errorMessage1
    )
    lp.loginWithoutUsername(
      password, errorMessage2
    )
    lp.loginWithIncorrectUsername(
      incorrectUsername, password, errorMessage3
    )
  })

  it('Login Ui Checks', () => {
    const lp = new LoginPage();
    lp.loginUiChecks()
  })
})