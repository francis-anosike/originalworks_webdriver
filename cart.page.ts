class SignUpPage {
    get autoPage() {return 'https://automationexercise.com/'}
    get SignupLink() {return $('//a[@href="/login"]')}
    get loginAccount() {return $('//h2[text()="Login to your account"]')}
    get loginEmail() {return $('//input[@data-qa="login-email"]')}
    get loginPassword() {return $('//input[@data-qa="login-password"]')}
    get loginbutton() {return $('//button[@data-qa="login-button"]')}
    get productPage() {return $('//h2[text()="Features Items"]')}

    get product1() {return  $('//a[@data-product-id="2"]')}
    get continue1() {return $('//button[@data-dismiss="modal"]')}
    get product2() {return $('//a[@data-product-id="5"]')}
    get viewCart() {return $('//a[@href="/view_cart"]')}
    get shoppingSummary() {return $('//li[text()="Shopping Cart"]')}

    get clickProduct1() {return $('//a[@data-product-id="5"]')}
    get clickProduct2() {return $('//a[@data-product-id="2"]')}
    get emptyCart() {return $('//b[text()="Cart is empty!"]')}


///PAGE ACTIONS

    async OpenPage() {await browser.url(this.autoPage)}
    async SignUpClick() {
        await this.SignupLink.click()
        await this.loginAccount.waitForDisplayed()}
    async emailInput(email: string, password: string) {
        await this.loginEmail.setValue(email)
        await this.loginPassword.setValue(password)
        await this.loginbutton.click()
        await this.productPage.waitForDisplayed()}
    async productPageDisplay(){
        await this.product1.click()
        await this.continue1.click()
        await this.product2.click()
        await this.viewCart.click()
        await this.shoppingSummary.waitForDisplayed()
    }
    
    async deleteProduct() {
        await this.clickProduct1.click()
        await this.clickProduct2.click()
        await this.emptyCart.waitForDisplayed
    }

}
export default new SignUpPage()