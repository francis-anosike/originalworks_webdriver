class SignUpPage {
    get autoPage() {return 'https://automationexercise.com/'}
    get SignUpLink() {return $('//a[@href="/products"]')}
    get showProducts() {return $('//h2[text()="All Products"]')}
    get product1() {return $('//a[@data-product-id="8"]')}
    get Clickcontine1() {return $('//button[@data-dismiss="modal"]')}
    get product2() {return $('//a[@data-product-id="12"]')}
    get viewCart() {return $('//u[text()="View Cart"]')}
    get shoppingCart() {return $('//li[text()="Shopping Cart"]')}
    get checkout() {return $('//a[text()="Proceed To Checkout"]')}
    
    get login() {return $('//u[text()="Register / Login"]')}
    get loginaccount() {return $('//h2[text()="Login to your account"]')}
    get loginEmail() {return $('//input[@data-qa="login-email"]')}
    get loginPassword() {return $('//input[@data-qa="login-password"]')}
    get loginButtion() {return $('//button[@data-qa="login-button"]')}
   
    get clickViewCart() {return $('//a[@href="/view_cart"]')}
    get proceedCheck() {return  $('//a[text()="Proceed To Checkout"]')}
    get checkSummary() {return $('//li[text()="Checkout"]')}
    get payment() {return $('//a[@href="/payment"]')}
    get paymentdetails() {return $('//li[text()="Payment"]')}
    
    get cardName() {return $('//input[@name="name_on_card"]')}
    get cardNumber() {return $('//input[@name="card_number"]')}
    get cvc() {return $('//input[@name="cvc"]')}
    get exMonth() {return $('//input[@name="expiry_month"]')}
    get exYear() {return $('//input[@name="expiry_year"]')}
    get payButton() {return $('//button[@data-qa="pay-button"]')}
    
    get orderPlaced() {return $('//b[text()="Order Placed!"]')}
    get contineButton() {return $('//a[@data-qa="continue-button"]')}

    ///PAGE ACTIONS

    async openPage() {await browser.url(this.autoPage)}
    async clickProduct() {
        await this.SignUpLink.click()
        await this.showProducts.waitForDisplayed()}
    
    async SelectProduct() {
        await this.product1.click()
        await this.viewCart.click()
        await this.shoppingCart.waitForDisplayed()
        await this.checkout.click()}
    
    async loginPage(email: string, password: string) {
            await this.login.click()
            await this.loginaccount.waitForDisplayed()
            await this.loginEmail.setValue(email)
            await this.loginPassword.setValue(password)
            await this.loginButtion.click()}

    async previewCart(){
        await this.clickViewCart.click()
        await this.proceedCheck.click()
        await this.checkSummary.waitForDisplayed()
        await this.payment.click()
        await this.paymentdetails.waitForDisplayed()}

    async cardinfo(cardName: string, cardNumber: string, cvc: string, exMonth: string, exYear: string){
        await this.cardName.setValue(cardName)
        await this.cardNumber.setValue(cardNumber)
        await this.cvc.setValue(cvc)
        await this.exMonth.setValue(exMonth)
        await this.exYear.setValue(exYear)
        await this.payButton.click()
        await this.orderPlaced.waitForDisplayed()
        await this.contineButton.click()}

    }

export default new SignUpPage()
