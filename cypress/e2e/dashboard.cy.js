import DashboardPage from "../pageObjects/dashBoardPageObjects.js";
import LoginPage from "../pageObjects/loginPageObjects.js"
describe('Dashboard Tests ', () => {

    beforeEach(() => {
        const lp = new LoginPage();
        lp.visit()
        lp.login(
            username, password
          )
        lp.clickLoginButton() 
      })
    //Initialize Variables
    var username, password;
    it('Dashboard Ui Checks', () => {
        // dp represents dashboard page
        const dp = new DashboardPage()
        dp.dashboardUiChecks()
      })

})