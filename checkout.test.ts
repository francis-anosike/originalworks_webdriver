describe('autoexercise checkout', () => {
    it('should complete checkout process successfully', async () => {
    await browser.url('https://automationexercise.com/');
    await expect(browser).toHaveTitle('Automation Exercise');
    await browser.maximizeWindow();

    await $('//a[@href="/products"]').click();
    await expect($('//h2[text()="All Products"]')).toBeDisplayed();
    await $('//a[@data-product-id="8"]').click();
    await $('//button[@data-dismiss="modal"]').click();
    await $('//a[@data-product-id="12"]').click();
    await $('//u[text()="View Cart"]').click();
    await expect($('//li[text()="Shopping Cart"]')).toBeDisplayed();
    await $('//a[text()="Proceed To Checkout"]').click();
    await $('//u[text()="Register / Login"]').click();
    await expect($('//h2[text()="Login to your account"]')).toBeDisplayed();
    await $('//input[@data-qa="login-email"]').setValue('francis@gmail.com');
    await $('//input[@data-qa="login-password"]').setValue('fran1234');
    await $('//button[@data-qa="login-button"]').click();
    await $('//a[@href="/view_cart"]').click();
    await $('//a[text()="Proceed To Checkout"]').click();
    await expect($('//li[text()="Checkout"]')).toBeDisplayed();
    await $('//a[@href="/payment"]').click()
    await expect($('//li[text()="Payment"]')).toBeDisplayed();
    
    await $('//input[@name="name_on_card"]').setValue('Francis Nosike');
    await $('//input[@name="card_number"]').setValue('1234567890123456');
    await $('//input[@name="cvc"]').setValue('123');
    await $('//input[@name="expiry_month"]').setValue('12');
    await $('//input[@name="expiry_year"]').setValue('2025');
    await $('//button[@data-qa="pay-button"]').click();
    await expect($('//b[text()="Order Placed!"]')).toBeDisplayed();
    await $('//a[@data-qa="continue-button"]').click();
    await browser.pause(3000);
    })
})