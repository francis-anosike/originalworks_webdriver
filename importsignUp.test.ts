import SignUpPage from "../pageobjects/signUp.page.ts"
describe('autoexercise signup', () => {
    it('should signup successfully', async () => {
        await browser.maximizeWindow()
        await SignUpPage.OpenPage()
        await SignUpPage.SignupPage()
        await SignUpPage.SignUpdetails('francis', 'francis@gmail.com')
        await SignUpPage.Accountdetails()
        await SignUpPage.addressInfo('Francis', 'Nosike','Nosike Corperation','23 St pauls Street','Alderney Avenue', 'New Zealand','Milton ford', 'Bletchley', '442', '0798765',)
    })
})