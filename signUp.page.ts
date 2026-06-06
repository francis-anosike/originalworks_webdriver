class SignUpPage {
    get autoPage() { return ('https://automationexercise.com/') }
    get clicksignUp() { return $('//a[@href="/login"]') }
    get loginUpAccount() { return $('//h2[text()="New User Signup!"]') }
    get SignUpName() { return $('//input[@data-qa="signup-name"]') }
    get SignUpEmail() { return $('//input[@data-qa="signup-email"]') }
    get clickSignUpButton() { return $('//button[@data-qa="signup-button"]') }
    get AccountInfo() { return $('//b[text()="Enter Account Information"]') }   ///Enter Account Information

    get gender() { return $('#id_gender1') }
    get password() { return $('#password') }
    get days() { return $('#days') }
    get months() { return $('#months') }
    get years() { return $('#years') }
    get newletters() { return $('#newsletter') }
    get options() { return $('#optin') }
    ///Address Information

    get firstname() { return $('#first_name') }
    get lastname() { return $('#last_name') }
    get company() { return $('#company') }
    get address1() { return $('#address1') }
    get address2() { return $('#address2') }
    get country() { return $('#country') }
    get state() { return $('#state') }
    get city() { return $('#city') }
    get zipcode() { return $('#zipcode') }
    get mobilenumber() { return $('#mobile_number') }
    get clickcreatebutton() { return $('//button[@data-qa="create-account"]') }

    ///PAGE ACTIONS

    async OpenPage() {
        await browser.url(this.autoPage)
    }
    async SignupPage() {
        await this.clicksignUp.click()
        await this.loginUpAccount.waitForDisplayed()
    }
    async SignUpdetails(name: string, passowrd: string) {
        await this.SignUpName.setValue(name)
        await this.SignUpEmail.setValue(passowrd)
        await this.clickSignUpButton.click()
        await this.AccountInfo.waitForDisplayed()
    }


    async Accountdetails() {
        await this.gender.click()
        await this.password.setValue('fran1234')
        await this.days.selectByVisibleText('5')
        await this.months.selectByVisibleText('May')
        await this.years.selectByVisibleText('2010')
        await this.newletters.click()
        await this.options.click()
    }

    async addressInfo(firstname: string,lastname: string,company: string,address1: string,address2: string,country:string,state:string,city:string,zipcode:string,mobileNumber:string,) {
    await this.firstname.setValue(firstname)
    await this.lastname.setValue(lastname)
    await this.company.setValue(company)
    await this.address1.setValue(address1)
    await this.address2.setValue(address2)
    await this.country.selectByVisibleText(country)
    await this.state.setValue(state)
    await this.city.setValue(city)
    await this.zipcode.setValue(zipcode)
    await this.mobilenumber.setValue(mobileNumber)
    await this.clickcreatebutton.click()

    }

}

export default new SignUpPage()