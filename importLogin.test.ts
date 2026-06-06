import SignUpPage from '../pageobjects/login.page.ts'
describe('autoexercise login', () => {
    it('should navigate login page properly', async () => {
        await browser.maximizeWindow()
        await SignUpPage.open()
        await SignUpPage.loginPageClick()
        await SignUpPage.detailsInput('francis@gmail.com', 'fran1234')

    })
})