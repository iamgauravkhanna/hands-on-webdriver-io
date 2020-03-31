describe("Interaction with Web Elements",function(){

    it("get text", function(){

        browser.url('/');
        const link = $('=WebdriverIO') ;
        console.log(link.getText()); // outputs: "WebdriverIO"
        console.log(link.getAttribute('href')); // outputs: "https://webdriver.io"

    });

}) ;