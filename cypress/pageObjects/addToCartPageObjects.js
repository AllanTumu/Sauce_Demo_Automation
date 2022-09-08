/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions for the add to cart page.
 */

/// <reference types="cypress" />

class AddToCartPage {
    
    addProductToCart() {
        const addToCartButton = cy.get('button[id="add-to-cart-sauce-labs-backpack"]')
        // Check add to cart button and add product to cart
        addToCartButton.should('have.text', 'Add to cart').click()
        // Check if add to cart button changes to Remove
        const removeFromCartButton = cy.get('button[id="remove-sauce-labs-backpack"]')
        removeFromCartButton.should('have.text', 'Remove')
        //Check if add to cart button has 1 as item added
        const cartButton = cy.get('a[class="shopping_cart_link"]')
        cartButton.should('have.text', '1').click()
        //Remove product from cart
        const removeFromCartButtonDetailsPage = cy.get('button[id="remove-sauce-labs-backpack"]')
        removeFromCartButtonDetailsPage.should('have.text', 'Remove').click()
        //Check if item was removed from cart
        const continue_shopping = cy.get('button[name="continue-shopping"]')
        continue_shopping.click()

        const addToCartButton1 = cy.get('button[id="add-to-cart-sauce-labs-backpack"]')
        addToCartButton1.should('have.text', 'Add to cart')

    }

  }
  export default AddToCartPage;