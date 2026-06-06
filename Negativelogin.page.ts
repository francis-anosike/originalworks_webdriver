///Negatvie login test

class SignUpPage {
    get autoPage() {return 'https://automationexercise.com/'}
    get loginPage() { return $('//a[@href="/login"]'); }
    get logintoyourAccount() {return $('//h2[text()="Login to your account"]')}
    get wrongEmailaddressLogin() {return $('//input[@data-qa="login-email"]')}
    get wrongPasswordLogin() {return $('//input[@data-qa="login-password"]')}
    get LoginButton() {return $('//button[@data-qa="login-button"]')}


async open() {
    await browser.url(this.autoPage)
}
async Signupclick() {
    await this.loginPage.click()
    await this.logintoyourAccount.waitForDisplayed()
}
async loginDetails(email: string, password: string) {
    await this.wrongEmailaddressLogin.setValue(email)
    await this.wrongPasswordLogin.setValue(password)
    await this.LoginButton.click()

}

}
export default new SignUpPage