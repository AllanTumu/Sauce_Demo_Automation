/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions for the dashboard page.
 */

/// <reference types="cypress" />

class DashboardPage {
    
    dashboardUiChecks() {
        //Verify that the navigation menu is showed
        const menu_button = cy.get('button[id="react-burger-menu-btn"]')
        menu_button.should('be.visible').click()
        const close_menu_button = cy.get('button[id="react-burger-cross-btn"]')
        close_menu_button.should('be.visible').click()
        //Verify cart icon is displayed
        const cart_button = cy.get('div[id="shopping_cart_container"]')
        cart_button.should('be.visible')
        //Verify the products title is displayed
        const dashboardTitle = cy.get('span[class="title"]')
        dashboardTitle.should('be.visible').contains('Products')
        // Verify that the Products are displayed
        const product_list = cy.get('.inventory_list')
        product_list.should('be.visible')
        // Verify that filter section is diplayed
        const filter_button = cy.get('span[class="select_container"]')
        filter_button.should('be.visible')
        const filter_dropdown = cy.get('select')
        filter_dropdown.should('have.text', 'Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)')
    }
  }
  export default DashboardPage;