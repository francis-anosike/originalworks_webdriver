describe('autoexercise cart',() =>{
    it ('should add products to cart successfully', async() =>{
    await browser.url('https://automationexercise.com/');
    await expect(browser).toHaveTitle('Automation Exercise');
    await browser.maximizeWindow();

    await $('//a[@href="/login"]').click();    
    await expect($('//h2[text()="Login to your account"]')).toBeDisplayed();
    await $('//input[@data-qa="login-email"]').setValue('francis@gmail.com');
    await $('//input[@data-qa="login-password"]').setValue('fran1234');
    await $('//button[@data-qa="login-button"]').click();

    await $('//a[@data-product-id="2"]').click();
    await $('//button[@data-dismiss="modal"]').click();
    await $('//a[@data-product-id="5"]').click();
    await $('//a[@href="/view_cart"]').click();
    await expect($('//li[text()="Shopping Cart"]')).toBeDisplayed();
    await $('//a[@data-product-id="5"]').click();
    await $('//a[@data-product-id="2"]').click();
    await expect($('//b[text()="Cart is empty!"]')).toBeDisplayed();





})

})