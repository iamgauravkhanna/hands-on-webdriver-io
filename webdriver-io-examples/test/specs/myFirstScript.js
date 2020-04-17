const assert = require("assert");

describe("WebDriver IO Demo", function() {

    it("WebDriver IO TestCase 1", function() {

        browser.url("https://lambdatest.github.io/sample-todo-app/");

        $("*[name='li1']").click();

        $("*[name='li2']").click();

        $("#sampletodotext").setValue("Lambdatest\n");

        assert.strictEqual(browser.getTitle(), "Sample page - lambdatest.com");

    });
});