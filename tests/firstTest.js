const {Builder, By, Button, Key} = require ("selenium-webdriver");
const assert = require("assert")

async function example(){

// launch the browsers
let driver = await new Builder().forBrowser("firefox").build();
//navigate to our application
await driver.get("https://www.juniper.net/");
//add
await driver.findElement(By.id("nav1")).click();
await driver.findElement(By.xpath("// a [@class = 'link-animation'][contains(text(), 'IT Networking')]")).click();
await driver.findElement(By.xpath("//div[@class='subnav__wrapper']//a[contains(text(), 'IT Networking')]")).click();

let todoText = await driver.findElement(By.xpath("(//span[contains(text(),'IT Networking')])[1]")).getText().then(function(value){
    return value
});
assert.strictEqual(todoText, "IT Networking");
//close the browser
await driver.quit();

}
example()