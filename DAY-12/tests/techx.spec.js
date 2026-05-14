import { test, expect } from "@playwright/test";
//test-->used to define test case.
//expect-->Used for validation/checking.{function}

//async-->used to define asynchronous function.
//page-->used to interact with the browser page.Represents browser tab/page.

test('check title', async ({ page }) => {
    await page.goto("https://www.techxincorporation.com/");  //waits for page to load.Open this website automatically.

    // const texhXHeading = page.locator('//*[@id="root"]/header/div/a[1]/span[1]');  //locate using xpath. to find element
    // console.log(texhXHeading);  //returns locator object. {not the element}


    //getbyRole-->used to find element based on role. for eg-- button, link, input, etc.
    // const exporeBtn = page.getByRole("link", { name: /Explore/ });  {locator is created} Find link whose text contains "Explore"
    // await exporeBtn.click();  {click performed}
    // expect(page.url()).toBe("https://www.techxincorporation.com/training");  Did browser navigate correctly?
    
    const consultBtn = page.getByRole("link", { name: /Request/ }).nth(1); 
    // [top bar result, main page result] --> [0, 1] --> 1  it means second "Request" link is clicked
    await consultBtn.click();  //{click performed}
    expect(page.url()).toBe("https://www.techxincorporation.com/contact");  //Did browser navigate correctly?
});