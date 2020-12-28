
import login from './login.js'
const userName = Cypress.env("userName");
const pin = Cypress.env("pin")
const rUser = Cypress.env("rUser");
const amount = Cypress.env("amount")



describe('Navigate to basic bank',() => {
    it('Should open basic bank', () => {
        login.loginUser(userName, pin)
    })
    it('send money to other user', () => {
        login.loginUser(userName, pin)
        cy.get('.form--transfer').within(() => {
            cy.get('input:first').type(rUser);
            cy.get('input:last').type(amount);
            cy.get('.form__btn--transfer').click()
        })

    })
})