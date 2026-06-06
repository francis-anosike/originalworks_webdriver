import SignUpPage from "../pageobjects/cart.page.ts" 
describe('autoexercise cart',() =>{
    it ('should add products to cart successfully', async() =>{
        await browser.maximizeWindow()
        await SignUpPage.OpenPage()
        await SignUpPage.SignUpClick()
        await SignUpPage.emailInput('francis@gmail.com', 'fran1234')
        await SignUpPage.productPageDisplay()
        await SignUpPage.deleteProduct()       
    })
})


