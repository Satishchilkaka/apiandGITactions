
import login from './login.js'
const user = Cypress.env("user");
const pin = Cypress.env("pin")
const rUser = Cypress.env("rUser");
const amount = Cypress.env("amount")



describe.skip('Navigate to basic bank',() => {

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

describe('Navigate to AS1', () => {
    it('navigate to AS1', () => {
        loginas(user, password)
    })
})
function loginas(user, password) {
    cy.visit('as1-ui/login')
    cy.get('.login-form').within(() => {
        cy.get('input:first').type(user, { delay: 0, force: true });
        cy.get('input:last').type(password, { delay: 0, force: true, log: false });
    })
    cy.get('.btn-login').click().should('not.exist')
    cy.wait(2000)
}