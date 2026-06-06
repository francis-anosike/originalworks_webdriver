import SignUpPage from "../pageobjects/checkout.page.ts"
    describe('autoexercise checkout', () => {
    it('should complete checkout process successfully', async () => {
        await browser.maximizeWindow()
        await SignUpPage.openPage()
        await SignUpPage.SelectProduct()
        await SignUpPage.loginPage('francis@gmail.com','fran1234',)
        await SignUpPage.previewCart()
        await SignUpPage.cardinfo('Francis Nosike','1234567890123456', '123', '12', '2025',)


})
    })
