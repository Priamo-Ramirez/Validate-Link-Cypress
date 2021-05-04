
/// <reference types="Cypress" />
describe('Test All Links', function () {
    beforeEach(() => {
        cy.visit('https://conduit-vanilla.herokuapp.com/#/')
    })
    it('Test Links by Clicking on button', function () {

        //Home
        cy.get('li:nth-of-type(1) > .nav-link').click()
        cy.location().should((loc) => {
            expect(loc.hash).to.eq('#/')
        })
        //Sign In
        cy.get('li#signin > .nav-link').click()
        cy.location().should((loc) => {
            expect(loc.hash).to.eq('#/login')
        })
        //Sign Up
        cy.get('li#signup > .nav-link').click()
        cy.location().should((loc) => {
            expect(loc.hash).to.eq('#/register')
        })        
    })

    it('Test Links - Array', function () {
        
        const pages = ['#/', "#/login", '#/register']

        pages.forEach( pages => {
            cy.get(`.nav-link[href='${pages}']`).click()
            cy.location().should((loc) => {
                expect(loc.hash).to.eq(`${pages}`)
            })
        })    
    })

    it('Test Links - Via Response Code', () => {

        const pages = ['Home', "Sign in", 'Sign up']

        pages.forEach(page => {
          cy
            .contains(page)
            .then((link) => {
              cy.request(link.prop('href'))
            })
        })
      }) 
})