

function loginUser(userName, pin) {
    cy.visit('')
    cy.get('.login').within(() => {
        cy.get('input:first').type(userName, { delay: 0, force: true });
        cy.get('input:last').type(pin, { delay: 0, force: true, log: false });
    })
    cy.get('.login__btn').click()
    cy.wait(2000)
}
module.exports = {  
    loginUser
}