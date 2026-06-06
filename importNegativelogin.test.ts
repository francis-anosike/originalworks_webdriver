import SignUpPage from '../pageobjects/Negativelogin.page.ts'
describe('autoexercise login', () => {
    it('should navigate login page properly', async () => {
        await browser.maximizeWindow()
        await SignUpPage.open()
        await SignUpPage.Signupclick()
        await SignUpPage.loginDetails('invalid@gmail.com', 'invalid1234')

    })
})