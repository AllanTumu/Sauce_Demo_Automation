import AddToCartPage from "../pageObjects/addToCartPageObjects.js";
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
    it('Add Product to cart', () => {
        // dp represents dashboard page
        const aTc = new AddToCartPage()
        aTc.addProductToCart()
      })
})