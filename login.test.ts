describe('autoexercise login', () =>{
    it ('should navigate login page properly', async () => {
    await browser.url('https://automationexercise.com/');
    await expect(browser).toHaveTitle('Automation Exercise');
    await browser.maximizeWindow();

    await $('//a[@href="/login"]').click();
    await expect($('//h2[text()="Login to your account"]')).toBeDisplayed();
    await $('//input[@data-qa="login-email"]').setValue('francis@gmail.com');
    await $('//input[@data-qa="login-password"]').setValue('fran1234');
    await $('//button[@data-qa="login-button"]').click();
})
})

///Negatvie login test

describe('autoexercise negativelogin', () => {
    it('should not login with invalid credentials', async () => {
    await browser.url('https://automationexercise.com/');
    await expect(browser).toHaveTitle('Automation Exercise');
    await browser.maximizeWindow();

    await $('//a[@href="/login"]').click();
    await expect($('//h2[text()="Login to your account"]')).toBeDisplayed();
    await $('//input[@data-qa="login-email"]').setValue('invalid@gmail.com');
    await $('//input[@data-qa="login-password"]').setValue('invalid1234');
    await $('//button[@data-qa="login-button"]').click();
    await expect($('//p[text()="Your email or password is incorrect!"]')).toBeDisplayed();


    })
})