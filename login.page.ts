class SignUpPage {
    get autoPage() {return ('https://automationexercise.com/')}
    get loginPage() { return $('//a[@href="/login"]'); }
    get logintoyourAccount() { return $('//h2[text()="Login to your account"]') }
    get EmailaddressLogin() { return $('//input[@data-qa="login-email"]') }
    get PasswordLogin() { return $('//input[@data-qa="login-password"]') }
    get LoginButton() { return $('//button[@data-qa="login-button"]') }


    async open() {
        await browser.url(this.autoPage)
    }
    async loginPageClick() {
        await this.loginPage.click()
        await this.logintoyourAccount.waitForDisplayed()
    }

    async detailsInput(email: string, password: string) {
        await this.EmailaddressLogin.setValue(email)
        await this.PasswordLogin.setValue(password)
        await this.LoginButton.click()
    }
}
export default new SignUpPage()