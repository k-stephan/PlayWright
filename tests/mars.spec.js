const {test, expect } = require("@playwright/test");

test('Access Mars URL',async({page})=>
{
    await page.goto("https://imarscrmdev.phxa.com/MARSWeb2/Login?");
    await expect(page).toHaveTitle(/MARS/);

});

test('Login by Record', async ({ page }) => 
  {
    await page.goto('https://imarscrmdev.phxa.com/MARSWeb2/Login?');
    //await page.pause();

   // console.log(await page.getAttribute('placeholder'));
    await expect(page.locator(".k-input-inner[placeholder='UserId']")).toBeVisible();
    await expect(page.locator(".k-input-inner[placeholder='UserId']")).toBeEditable();
    //await expect.soft(page.locator(".k-input-inner[placeholder='UserId']")).toBeDisabled();

    await expect(page.locator('text=Contact')).toHaveCount(1);
    if (await page.$('text=Contact'))
    {
      await page.locator(".k-input-inner[placeholder='UserId']").fill('SFSMARSW');

  
      await page.locator(".k-input-inner[type='password']").fill('mars1');
    }



    //await page.locator('span:nth-child(2)#btnLogin').click();
      await page.locator("//*[@id='btnLogin'][2]").click();
    
  
    await expect(page).toHaveTitle(/SSG/);


  
});

