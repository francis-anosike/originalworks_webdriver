describe('autoexercise signup', () => {
    it('should signup successfully', async () => {
        await browser.url('https://automationexercise.com/');
        await expect(browser).toHaveTitle('Automation Exercise');

        await $('//a[@href="/login"]').click();
        await expect($('//h2[text()="New User Signup!"]')).toBeDisplayed();
        await browser.maximizeWindow();
        await $('//input[@data-qa="signup-name"]').setValue('francis');
        await $('//input[@data-qa="signup-email"]').setValue('francis@gmail.com');
        await $('//button[@data-qa="signup-button"]').click();

        ///Enter Account Information
        await expect($('//b[text()="Enter Account Information"]')).toBeDisplayed();
        await $('#id_gender1').click();
        await $('#password').setValue('fran1234');
        await $('#days').selectByVisibleText('5');
        await $('#months').selectByVisibleText('May');
        await $('#years').selectByVisibleText('2010');
        await $('#newsletter').click();
        await $('#optin').click();

        ///Address Information
        await $('#first_name').setValue('Francis');
        await $('#last_name').setValue('Nosike');
        await $('#company').setValue('Nosike Corperation');
        await $('#address1').setValue('23 St pauls Street');
        await $('#address2').setValue('Alderney Avenue');

        await $('#country').selectByVisibleText('New Zealand');
        await $('#country').waitForDisplayed();

        await $('#state').setValue('Milton ford');
        await $('#city').setValue('Bletchley');
        await $('#zipcode').setValue('442');
        await $('#mobile_number').setValue('0798765');
        await $('//button[@data-qa="create-account"]').click();
     
    })
})